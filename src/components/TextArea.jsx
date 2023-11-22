import React, { useState } from 'react'
function TextArea(props) {
    let [name,setName]=useState('');   
    console.log(name);
    return (
    <div  className={`'bg'-${props.val?'light':'dark'} container p-4`} >
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <textarea name="" id="txt" cols="80" rows="20" value={name===''?'please Enter The Text Here':name} onChange={(event)=>{setName(event.target.value)}} style={{margin:'auto'}}></textarea>
        </div>      
      <br />
      <div style={{marginLeft:'230px'}}>
      <div  style={{display:'inline-block'}}>
      <button  className={`${props.val?'btn btn-secondary mx-2':'btn btn-primary mx-2'}`} onClick={()=>{setName(name.toUpperCase())}}>UpperCase</button>
    </div>
    <div  style={{display:'inline-block'}}>
      <button  className={`${props.val?'btn btn-secondary mx-2':'btn btn-primary mx-2'}`} onClick={()=>{setName(name.toLocaleLowerCase())}}>Lower Case</button>
    </div>
    <div  style={{display:'inline-block'}}>
      <button  className={`${props.val?'btn btn-secondary mx-2':'btn btn-primary mx-2'}`} onClick={()=>{setName('')}}>Clear Text</button>
    </div>
    <div  style={{display:'inline-block'}}>
      <button  className={`${props.val?'btn btn-secondary mx-2':'btn btn-primary mx-2'}`} onClick={()=>{let txt=document.getElementById("txt")
      txt.select();
      navigator.clipboard.writeText(txt.value)
    }}>Copy Text</button>
    </div>

      </div>
    </div>
  );
}

export {TextArea}

