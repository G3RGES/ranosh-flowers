import { Outlet } from "react-router";
import Navbar from "./Navbar";
import AboutSection from "./../Home/AboutSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <AboutSection />
      <Footer />
    </>
  );
}

export default MainLayout;
