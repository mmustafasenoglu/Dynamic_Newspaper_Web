import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <Home />
              </div>
              <Footer />
            </>
          } />
          
          <Route path="/haberler" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <News />
              </div>
              <Footer />
            </>
          } />

          <Route path="/haber/:id" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <NewsDetail />
              </div>
              <Footer />
            </>
          } />

          <Route path="/hakkimda" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <Hero />
              </div>
              <Footer />
            </>
          } />

          <Route path="/iletisim" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <Contact />
              </div>
              <Footer />
            </>
          } />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
