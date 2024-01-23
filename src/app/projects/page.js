import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-600 via-rose-400 to-lime-400">
      <Header />
      <div className="">Projects</div>
    </main>
  );
}
