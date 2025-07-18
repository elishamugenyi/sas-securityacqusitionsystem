import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ClientForm } from './pages/ClientForm';
import { SuccessPage } from './pages/SuccessPage';
import { ApprovalStatus } from './pages/ApprovalStatus';
import { AdminDashboard } from './pages/AdminDashboard';
import { ClientProvider } from './contexts/ClientContext';
import './index.css';
import './App.css';

function App() {
  return (
    <ClientProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/form" element={<ClientForm />} />
            <Route path="/success/:clientId" element={<SuccessPage />} />
            <Route path="/status/:clientId" element={<ApprovalStatus />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </ClientProvider>
  );
}

export default App;
