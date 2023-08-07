import Image from "next/image";
import Nav from "./components/Nav_comp";
import Testimonials from "./components/testimonials_comp";

export default function Home() {
  return (
    <div className="bg-hero-bg">
      <Nav />
      <Testimonials />
    </div>
  );
}
