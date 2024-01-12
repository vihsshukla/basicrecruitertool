import Table from "../Table/Table";
import CONSTANT from "../../Constants/Constants.js";
import { useEffect, useState } from "react";

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
    <h3>Candidates List</h3>
    <Table data={candidateData} loading={loading}/>
  </>);
}

export default Candidates;
