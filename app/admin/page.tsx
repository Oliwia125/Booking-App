import Navbar from "@/components/navbar/nav";
import Image from "next/image";
import Grid from "@/components/grid/grid";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
   <main>
    <Navbar />
    <Header />
    <Grid />
    <Footer />
   </main>
  );
}
