import Header from "./Header";
import Footer from "./Footer";
import DemoBanner from "./DemoBanner";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <DemoBanner />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
