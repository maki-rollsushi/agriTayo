import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PreOrderFormPage from './pages/PreOrderFormPage';
import ContactSupportPage from './pages/ContactSupportPage';
import MyOrdersPage from './pages/MyOrdersPage';

function App() {
  return (
    <Router>
      <Header />     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pre-order/:productId" element={<PreOrderFormPage />} />
          <Route path="/contact" element={<ContactSupportPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
