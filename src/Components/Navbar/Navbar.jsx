import './Navbar.css';
import { useNavigate } from 'react-router-dom';
const Navbar=()=>{
  const navigate=useNavigate(null);
  return (<>
    <div className="navbar-items">
      <div className="left">
        Basic Recruitment Tool
      </div>
      <div className="right">
        <div className="navbar-item-text" onClick={()=>navigate('/')}>
          Home
        </div>
        <div className="navbar-item-text" onClick={()=>navigate('/candidates')}>
          Candidates
        </div>
        <div className="navbar-item-button">
          <button className="add-candidate" onClick={()=>navigate('/add-candidate')}>
            Add Candidate
          </button>
        </div>
      </div>
    </div>
  </>);
}

export default Navbar;