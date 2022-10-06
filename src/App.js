import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Homescreen';
import About from './screens/Aboutscreen';
import Collections from './screens/Collectionscreen';
import Contact from './screens/Contactscreen';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="Aboutscreen" element={<About/>}/>
    <Route path="Collectionscreen" element={<Collections/>}/>
    <Route path="Contactscreen" element={<Contact/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
