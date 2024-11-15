// CSS
import "./App.css";

// React Router DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Competition from "./pages/competition/Competition";
import History from "./pages/history/History";
import Help from "./pages/help/Help";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App(): JSX.Element {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/history" element={<History />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
