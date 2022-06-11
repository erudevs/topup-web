import Navbar from "../Navbar";
import Footer from "../Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
