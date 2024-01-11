import React, { useContext, useState } from 'react';
import './Table.css';
import CONSTANT from '../../Constants/Constants';
import SnackbarContext from '../../Context/Snackbar/SnackbarState';
import Modal from '../Modal/Modal';

const Table = ({ data }) => {
  const [selectedCandidates, setSelectedCandidates] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState(false);
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [status,setStatus]=useState('');
  const { setAlertStatus, addAlertDetails } = useContext(SnackbarContext);

  const handleCheckboxChange = (emailId) => {
    if (selectedCandidates.includes(emailId)) {
      setSelectedCandidates((prevSelected) =>
        prevSelected.filter((id) => id !== emailId)
      );
    } else {
      setSelectedCandidates((prevSelected) => [...prevSelected, emailId]);
    }
    console.log(selectedCandidates);
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedCandidates([]);
    } else {
      const allCandidateIds = data.map((item) => item.emailid);
      setSelectedCandidates(allCandidateIds);
    }
    setSelectAll(!selectAll);
    console.log(selectedCandidates);
  };

  const handleUpdate=()=>{
    console.log({isModalOpen});
    setIsModalOpen(true);
    console.log({isModalOpen});
  }

  const closeModal=()=>{
    setIsModalOpen(false);
  }

  const handleStatus=(event)=>{
    event.preventDefault();
    setStatus(event.target.value);
    console.log({status});
  }

  const handleConfirm=()=>{
    fetch(CONSTANT.BASE_URL+'updateCandidateStatus',{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({status:status,emailId:selectedCandidates.join(',')})
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
    setTimeout(()=>{
      window.location.reload();
    },3000);
  }

  return (
    <>
      {selectedCandidates.length!==0 && <button className='update-status' onClick={handleUpdate}>Update</button>}
      {isModalOpen && <div>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                          <h2>Update the status for the following candidates.</h2>
                          <p>Candidates: {selectedCandidates.join(', ')}</p>
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
      }
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </th>
            <th>Candidate Name</th>
            <th>Contact Information</th>
            <th>Skills/Qualifications</th>
            <th>Current Status</th>
            <th>Expected Salary</th>
            <th>Computed Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.candidateid}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCandidates.includes(item.emailid)}
                  onChange={() => handleCheckboxChange(item.emailid)}
                />
              </td>
              <td>{item.firstname+' '+(item.middlename!==''?item.middlename+' ':'')+item.lastname}</td>
              <td>
                <ul>
                  <li>
                    <span>Emailid: {item.emailid}</span>
                  </li>
                  <li>
                    <span>Phone: {item.phonenumber}</span>
                  </li>
                </ul>
              </td>
              <td>
                {item.skills}
              </td>
              <td>
                {item.currentstatus}
              </td>
              <td>
                {item.expectedsalary}
              </td>
              <td className='computed-score'>{item.computedscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
