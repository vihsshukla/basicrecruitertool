import Table from "../Table/Table";
import CONSTANT from "../../Constants/Constants.js";
import { useEffect, useState } from "react";
import './Candidates.css';

const Candidates=()=>{
  const [candidateData,setCandidateData]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    fetch(CONSTANT.BASE_URL+'getCandidates/all',{
      method:'GET',
      referrerPolicy: 'no-referrer'
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setCandidateData(data);
      setLoading(false);
    });
  },[]);

  return (<>
  <div className="candidates">
    <header className="header">
        <h3 className="h3text">Candidates List</h3>
    </header>
    <Table data={candidateData} loading={loading}/>
  </div>
  </>);
}

export default Candidates;
