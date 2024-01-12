import { useContext } from 'react';
import './App.css';
import Candidates from './Components/Candidates/Candidates';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnackbarContext from './Context/Snackbar/SnackbarState';
import Snackbar from './Components/Snackbar/Snackbar';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import UpdateModal from './Components/Modal/UpdateModal/UpdateModal';
import Footer from './Components/Footer/Footer.jsx';


function App() {
  const {showAlert,alert}=useContext(SnackbarContext);
  console.log({showAlert});
  console.log({alert});
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary><Navbar /></ErrorBoundary>
        {showAlert && alert && <ErrorBoundary><Snackbar severity={alert?.severity} displayText={alert?.displayText}/></ErrorBoundary>}
        <Routes>
          <Route path='/' element={<ErrorBoundary><Home /></ErrorBoundary>}></Route>
          <Route path='/candidates' element={<ErrorBoundary><Candidates /></ErrorBoundary>}></Route>
          <Route path='/add-candidate' element={<ErrorBoundary><Form /></ErrorBoundary>}></Route>
          <Route path='/candidates/updateStatus/:data' element={<ErrorBoundary><UpdateModal /></ErrorBoundary>}></Route>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <ErrorBoundary><Footer/></ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
