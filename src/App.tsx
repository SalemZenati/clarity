import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';
import JournalPage from './pages/JournalPage';
import ResourcesPage from './pages/ResourcesPage';
import PeerVoicesPage from './pages/PeerVoicesPage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="journal" element={<JournalPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="stories" element={<PeerVoicesPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;