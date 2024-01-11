import { useContext } from 'react';
import './App.css';
import Candidates from './Components/Candidates/Candidates';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnackbarContext from './Context/Snackbar/SnackbarState';
import Snackbar from './Components/Snackbar/Snackbar';


function App() {
  const {showAlert,alert}=useContext(SnackbarContext);
  console.log({showAlert});
  console.log({alert});
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {showAlert && alert && <Snackbar severity={alert?.severity} displayText={alert?.displayText}/>}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/candidates' element={<Candidates />}></Route>
          <Route path='/add-candidate' element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
