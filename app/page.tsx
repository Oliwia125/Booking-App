import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import LazyGrid from "@/components/grid/grid-lazy";


interface Hotel {
  title: string;
  location: string;
  url: string;
  handle: string;
}

export default async function Home() {
  return (
    <main>
      
      <Header />
      <LazyGrid/>
      <Footer />
    </main>
  );
}
