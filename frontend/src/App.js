import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Authority from "./components/Authority";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Guarantee from "./components/Guarantee";
import BookingForm from "./components/BookingForm";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const Home = () => (
  <main>
    <Navbar />
    <Hero />
    <Authority />
    <Services />
    <Reviews />
    <Guarantee />
    <BookingForm />
    <FAQSection />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" richColors />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
