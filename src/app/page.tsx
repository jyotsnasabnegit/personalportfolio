import { FloatingNav } from "@/components/FloatingNavbar";
import Hero from "@/components/Hero";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 justify-center items-center mx-auto sm:p-10 p-5 flex flex-col overflow-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome/>}]} />
        <Hero />
      </div>
    </main>
  );
}
