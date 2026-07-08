import { useState, useEffect } from "react";
import { Check, Trash2, ClipboardList } from "lucide-react";
import { useCart, type Order } from "../context/CartContext";
import { onMessage } from "../socket";

const AdminPanel = () => {
  const { orders, completeOrder, deleteOrder, receiveOrder } = useCart();

  useEffect(() => {
    return onMessage((data) => {
      try {
        const parsed = JSON.parse(data);
        if (parsed.type === "new-order") {
          receiveOrder(parsed.order);
        }
      } catch { /* ignore invalid messages */ }
    });
  }, [receiveOrder]);
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const filteredOrders = orders.filter((o) => {
    if (filter === "pending") return o.status === "pending";
    if (filter === "completed") return o.status === "completed";
    return true;
  });

  const formatTime = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="admin-panel" className="bg-espresso px-6 py-20 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <ClipboardList size={24} className="text-caramel" />
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            Admin <span className="italic text-caramel">Dashboard</span>
          </h2>
        </div>
        <p className="mt-2 font-body text-sm text-cream/50">
          Track and manage customer orders
        </p>

        <div className="mt-8 flex gap-2">
          {(["all", "pending", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 font-body text-xs uppercase tracking-widest transition ${
                filter === f
                  ? "bg-caramel text-espresso"
                  : "bg-cream/10 text-cream/60 hover:bg-cream/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filteredOrders.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="font-body text-sm text-cream/40">No orders yet</p>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4">
            {filteredOrders.map((order: Order) => (
              <div
                key={order.id}
                className="rounded-2xl bg-cream/5 p-5 backdrop-blur-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        order.status === "pending"
                          ? "bg-caramel"
                          : "bg-green-400"
                      }`}
                    />
                    <div>
                      {order.seatNumber ? (
                        <span className="font-body text-sm font-semibold text-cream">
                          Seat {order.seatNumber}
                        </span>
                      ) : (
                        <span className="font-body text-sm font-semibold text-cream">
                          {order.address}
                        </span>
                      )}
                      <span className="ml-3 font-body text-xs text-cream/40">
                        {formatDate(order.timestamp)} at{" "}
                        {formatTime(order.timestamp)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {order.status === "pending" && (
                      <button
                        onClick={() => completeOrder(order.id)}
                        className="flex items-center gap-1.5 rounded-full bg-green-500/20 px-4 py-1.5 font-body text-xs font-semibold text-green-300 transition hover:bg-green-500/30"
                      >
                        <Check size={12} />
                        Complete
                      </button>
                    )}
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-4 py-1.5 font-body text-xs font-semibold text-red-300/70 transition hover:bg-red-500/20 hover:text-red-300"
                    >
                      <Trash2 size={12} />
                      Delete
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {order.items.map((item) => (
                    <span
                      key={item.id}
                      className="rounded-full bg-cream/10 px-3.5 py-1.5 font-body text-xs text-cream/70"
                    >
                      {item.quantity}x {item.title}
                    </span>
                  ))}
                </div>

                <div className="mt-3 font-display text-lg text-cream">
                  ${order.total.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 border-t border-cream/10 pt-6 text-center">
          <p className="font-body text-xs text-cream/30">
            Total orders: {orders.length} | Pending:{" "}
            {orders.filter((o) => o.status === "pending").length} | Completed:{" "}
            {orders.filter((o) => o.status === "completed").length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
