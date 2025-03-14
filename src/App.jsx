import Form from './components/Form';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; // Import global styles

function App() {
  return (
    // <div className="App">
        
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
