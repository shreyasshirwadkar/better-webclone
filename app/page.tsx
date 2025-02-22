import Testimonials from "./pages/Testimonials";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Landing></Landing>
      <Testimonials></Testimonials>
      <Services></Services>
      <Footer />
    </div>
  );
}
