import React, { useState } from 'react'//rac

const TextForm = (props) => {

const handleUpclick = () =>{
    // console.log("uppercase was clicked");
    // setText("You have clicked on handleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!" , "success"); 
};

let [text , setText] = useState("Enter text here la al");

const handleOnchange = (event) =>{
    console.log("On Change");
    setText(event.target.value);
};


const handleCopy = () =>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied!" , "success"); 
}

const handleExtraSpace = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("extra space remooved" , "success");
}

const ClearText = () =>{
    
    let newText = '';
    setText(newText);
    props.showAlert("Cleared" , "success"); 
}

  return (
    <>
    <div className='container' style={{color : props.mode === 'dark'? 'white': '#042743'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    <label  htmlFor="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <textarea className='form-control' value={text} onChange={handleOnchange} id='myBox' rows='8' style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}></textarea>
  <button  className="btn btn-primary mx-1" onClick={handleUpclick }>To UpperCase</button>
  <button  className="btn btn-primary mx-1" onClick={ClearText }>Clear Text</button>
  <button  className='btn btn-primary mx-3' onClick= {handleCopy}>Copy Text</button>
  <button  className='btn btn-primary mx-3' onClick= {handleExtraSpace}>Remove Extra Space</button>
  {/* <button  className='btn btn-primary mx-3' onClick= {handleExtraSpace}>Remove Extra Space</button> */}
  

    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div> 
    </> 
  )
}

export default TextForm
