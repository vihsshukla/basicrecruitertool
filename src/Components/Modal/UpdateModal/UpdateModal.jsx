import {useState, useContext} from 'react';
import CONSTANT from '../../../Constants/Constants';
import SnackbarContext from '../../../Context/Snackbar/SnackbarState';
import Modal from '../../Modal/Modal';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateModal=()=>{
  const [status,setStatus]=useState('');
  const { setAlertStatus, addAlertDetails } = useContext(SnackbarContext);
  const [isModalOpen,setIsModalOpen]=useState(true);
  const {data}=useParams();
  const navigate=useNavigate();

  const closeModal=()=>{
    setIsModalOpen(false);
    navigate('/candidates');
  }

  const handleStatus=(event)=>{
    event.preventDefault();
    setStatus(event.target.value);
  }

  const handleConfirm=()=>{
    fetch(CONSTANT.BASE_URL+'updateCandidateStatus',{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({status:status,emailId:data})
    })
    .then((res)=>{
      if(res.status===200){
        setAlertStatus(true);
        addAlertDetails('success','Current Status updated Successfully.');
      }
    })
    .catch((err)=>{
      console.log(err.message);
      setAlertStatus(true);
      addAlertDetails('error','We faced issue while updating status.');
    });
    setIsModalOpen(false);
    navigate('/candidates');
  }

  return (<div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <h2>Update the status for the following candidates.</h2>
              <p>Candidates: {data}</p>
              <label>
                Current Status:
                <input
                  type="text"
                  name="currentStatus"
                  required="true"
                  onChange={handleStatus}
                />
              </label>
              <button className='confirm' onClick={handleConfirm}>Confirm</button>
            </Modal>
          </div>
        );
}

export default UpdateModal;

