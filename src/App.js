import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import "./style/style.css"
import React,{useState} from 'react'

function App() {
  let [mode,setMode]=useState(true);
  
  let toogleMode=()=>{
    if(mode=='light'){
      setMode('dark')
    }
    else{
      setMode('light')
    
    }
  }
  return (
    <>
   <Navigation toggleMode={toogleMode}/>
   </>
  
  );
}

export default App;
