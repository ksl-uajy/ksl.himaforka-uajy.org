import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Modul from "@/components/Modul";
import Navbar from "@/components/Navbar";

const Kegiatan = () => {
  return (
    <div className="bg-[#161109]">
      <Navbar />
      <Modul />
      <Gallery />
      <Event />
      <Footer />
    </div>
  );
};

export default Kegiatan;
