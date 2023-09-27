import {
  Routes,
  Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
