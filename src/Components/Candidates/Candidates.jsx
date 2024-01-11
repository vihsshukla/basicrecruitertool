import Table from "../Table/Table";
import CONSTANT from "../../Constants/Constants.js";
import { useEffect, useState } from "react";
const Candidates=()=>{
  const [candidateData,setCandidateData]=useState([]);
  useEffect(()=>{
    fetch(CONSTANT.BASE_URL+'getCandidates/all',{
      method:'GET'
    })
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setCandidateData(data);
    });
    console.log({candidateData});
  },[]);

  return (<>
    <h3>Candidates List</h3>
    <Table data={candidateData}/>
  </>);
}

export default Candidates;