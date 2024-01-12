import { useContext, useState } from 'react';
import './Form.css';
import CONSTANT from '../../Constants/Constants';
import { useNavigate } from 'react-router-dom';
import SnackbarContext from '../../Context/Snackbar/SnackbarState';

const Form=()=>{
  const [formData,setFormData]=useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    phone:'',
    skills:'',
    expectedSalary:'',
    nodeExperienceinyears:'',
    reactExperienceinyears:'',
    nodeExperienceinmonths:'',
    reactExperienceinmonths:''
  });

  const { setAlertStatus, addAlertDetails } = useContext(SnackbarContext);

  const navigate=useNavigate();
  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(CONSTANT.BASE_URL+'addCandidates',{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formData)
    })
    .then((res)=>{
      console.log(res);
      if(res.status===200){
        setAlertStatus(true);
        addAlertDetails('success','Candidate Added successfully.');
        navigate('/candidates');
      }else if(res.status===403){
        setAlertStatus(true);
        addAlertDetails('warning','Candidate Already exists in the db.');
        navigate('/candidates');
      }
    })
    .catch((err)=>{
      console.log(err.message);
      setAlertStatus(true);
      addAlertDetails('error','We faced some technical issue while adding candidates.');
      navigate('/candidates');
    });
  };
  return (<>
    <header className="header">
        <h3 className="h3text">Candidate Form</h3>
    </header>
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        <span>First Name:</span>
        <input
          type="text"
          name="firstName"
          required={true}
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <span>Middle Name:</span>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <span>Last Name:</span>
        <input
          type="text"
          name="lastName"
          required={true}
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <span>Email:</span>
        <input
          type="email"
          name="email"
          required={true}
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <span>Phone:</span>
        <input
          type="phone"
          name="phone"
          required={true}
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>

      <label>
        <span>Skills:</span>
        <input
          type="skills"
          name="skills"
          value={formData.skills}
          onChange={handleInputChange}
        />
      </label>

      <label>
      <span>Expected Salary:</span>
        <input
          type="string"
          name="expectedSalary"
          required={true}
          value={formData.expectedSalary}
          onChange={handleInputChange}
        />
      </label>

      <label>
      <span>Node Experience:</span>
      <span>Years:</span>
        <input
          type="number"
          name="nodeExperienceinyears"
          required={true}
          value={formData.nodeExperienceinyears}
          onChange={handleInputChange}
        />
        <span>Months:</span>
        <input
          type="number"
          name="nodeExperienceinmonths"
          required={true}
          value={formData.nodeExperienceinmonths}
          onChange={handleInputChange}
        />
      </label>

      <label>
      <span>React Experience:</span>
        <span>Years:</span>
        <input
          type="number"
          name="reactExperienceinyears"
          required={true}
          value={formData.reactExperienceinyears}
          onChange={handleInputChange}
        />
        <span>Months:</span>
        <input
          type="number"
          name="reactExperienceinmonths"
          required={true}
          value={formData.reactExperienceinmonths}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  </>);
}

export default Form;
