import {
  Routes,
  Route,
  Link,
  Outlet  
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <Routes>
      <Route>
        <div className="App">
          <Calculator />
          <Quote />
        </div>
      </Route>
    </Routes>
  );
}

export default App;
