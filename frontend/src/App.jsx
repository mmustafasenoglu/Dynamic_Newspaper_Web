import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
            </>
          } />
          
          <Route path="/haberler" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <News />
              </div>
            </>
          } />

          <Route path="/haber/:id" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <NewsDetail />
              </div>
            </>
          } />

          <Route path="/hakkimda" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <Hero />
              </div>
            </>
          } />

          <Route path="/iletisim" element={
            <>
              <Navbar />
              <div className="flex-grow">
                <Contact />
              </div>
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
