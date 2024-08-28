import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './Components/Header';
import MainBanner from './Components/MainBanner';
import ProductsPage from './Components/ProductsPage';
import ContactPage from './Components/ContactPage';
import ProductDetailPage from './Components/ProductDetailPage';
import Footer from './Components/Footer';
import { CartProvider } from './CartContext';
import products from './data/products'; // Ürünleri import edin
import './App.css';

// Ürün id'sini kullanarak ürünü bulacak bir bileşen
const ProductDetailWrapper = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  return <ProductDetailPage product={product} />;
};

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<MainBanner />} />
              <Route path="/urunler" element={<ProductsPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/urunler/:id" element={<ProductDetailWrapper />} /> {/* Ürün detay rotası */}
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
