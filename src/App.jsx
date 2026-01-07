
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';



import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Loader from './components/ui/Loader';
import Cursor from './components/ui/Cursor';
import PageTransition from './components/ui/PageTransition';
import ScrollToTop from './components/utils/ScrollToTop';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Cursor />
      <PageTransition>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </PageTransition>
    </Router>
  );
}

export default App;
