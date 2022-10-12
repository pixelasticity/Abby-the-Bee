import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import ReactGA from "react-ga4";

if (process.env.GA4_ID) {
  ReactGA.initialize(process.env.GA4_ID);
  ReactGA.send("pageview");
}

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
