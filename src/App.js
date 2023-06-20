import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Beranda from '../src/components/Beranda';
import Navbar from '../src/components/Navbar';
import ManejemenBuku from './components/ManejemenBuku';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
     <Routes>
        <Route path="/" exact element={<Beranda />} />

        <Route path="/manejemen-buku" element={<ManejemenBuku/>} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
