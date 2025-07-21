import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TBPlanted from "./pages/TBPlanted";
import PreOrderFormPage from "./pages/PreOrderFormPage";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pre-order/:productId" element={<PreOrderFormPage />} />
        <Route path="/TBPlanted" element={<TBPlanted />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
