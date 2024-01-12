import React from 'react';
import './Table.css';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Table = ({ data , loading}) => {
  const [selectedCandidates, setSelectedCandidates] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState(false);

  const navigate=useNavigate();

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

  return (
    <>
      {selectedCandidates.length!==0 && <button className='update-status' onClick={()=>navigate(`/candidates/updateStatus/${selectedCandidates}`)}>Update</button>}
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
      
      {loading && <Loader/>}
    </>
  );
};

export default Table;
