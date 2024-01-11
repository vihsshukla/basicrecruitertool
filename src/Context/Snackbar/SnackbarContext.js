import SnackbarContext from "./SnackbarState";
import { useState } from "react";

export const SnackbarState=(props)=>{
  const [showAlert,setShowAlert]=useState(false);
  const [alert,setAlert]=useState(undefined);

  const addAlertDetails=(severity,displayText)=>{
    setAlert({severity,displayText});
  }

  const setAlertStatus=(status)=>{
    setShowAlert(status);
  }

  return (<SnackbarContext.Provider value={{
      showAlert,
      setAlertStatus,
      alert,
      addAlertDetails
  }} >{props.children}</SnackbarContext.Provider>);
}

export default SnackbarState;