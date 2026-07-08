import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AdminPanel from "../components/AdminPanel";

const Admin = () => {
  return (
    <div className="min-h-screen bg-espresso">
      <div className="px-6 pt-8 md:px-12 lg:px-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2.5 font-body text-sm uppercase tracking-widest text-cream/70 transition hover:bg-cream/20 hover:text-cream"
        >
          <ArrowLeft size={14} />
          Back to Store
        </Link>
      </div>
      <AdminPanel />
    </div>
  );
};

export default Admin;
