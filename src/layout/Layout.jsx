import { useState, useEffect } from 'react';
// components
import LoadingSpinner from "../components/LoadingSpinner";
import Menu from "../components/Menu";
import Footer from "../components/Footer.jsx";
import BackToTop from "../components/BackToTop.jsx";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(function () {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <LoadingSpinner loading={loading} setLoading={setLoading} />
      <Menu />
      <main data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabIndex="0">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
