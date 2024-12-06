import "./navbar.css";
import { RiPagesLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";

export default function Navbar() {
  return (
    <section className="absolute top-0 bottom-0 w-32 left-0 bg-primary px-2 py-3 text-white">
      <div className="flex flex-col gap-3">
        <Link to="/logister">Connexion / Inscription</Link>
        <span className="text-2xl">Dashboard</span>
        <section className="flex">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <RiPagesLine className="mr-2" /> Pages
            </div>
            <button type="button">
              <FaPlus />
            </button>
          </div>
        </section>
        <Button>Se déconnecter</Button>
      </div>
    </section>
  );
}
