import React, {useState} from 'react'

export default function TextForm(props) {
  let dark = {
    backgroundColor : 'gray',
    color: 'White'
  }

  let light = {
    backgroundColor : 'white',
    color: 'black'
  }

  const handleOnBlur = () => {
    if(text==='')
      setText("Enter text Here");
  }
  
  const handlOnclick = () => {
    if(text==='Enter text Here')  
      setText("");
  }
  
  const handleOnChange = (event) => {
    // console.log("Handle On chnage called");
      setText(event.target.value);
  }

  const handleUpClick = () => {    
    //console.log("Upper case button clicked");
    //setText("New text is Set");
    let textAreaText = text.toUpperCase();
    setText(textAreaText);
    props.showAlert('Text converted to uppercase', 'success');
  }

  const handledownClick = () => {
    let textAreaText = text.toLocaleLowerCase();
    setText(textAreaText);
    props.showAlert('Text converted to lowercase', 'success');
  }

  const handleClearText = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
  }

  const handleCopyText = () => {
    var copyText = document.getElementById("myBox1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Text copied', 'success');
  }

  function countWords(text){
    text = text.replace(/(^\s*)|(\s*$)/gi,"");  //exclude  start and end white-space
    text = text.replace(/[ ]{2,}/gi," "); //2 or more space to 1
    text = text.replace(/\n /,"\n");    //exclude newline with a start spacing
    return text.split(' ').filter(function(str){return str!=="";}).length;
  }

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim()
    setText(newText);
    props.showAlert('Removed extra spaces from string', 'success');
  }

  const [text, setText] = useState('Enter text Here');
  return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h1 className={`mt-4 text-${props.mode==='dark'?'light':'dark'}`}>{props.heading}</h1>
                <textarea className={`form-control ${props.mode==='dark'? dark : light}}`} id="myBox1" rows="8" value={text} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handlOnclick}></textarea>
            </div>            
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary ms-1" onClick={handledownClick}>Convert To LowerCase</button>
            <button className="btn btn-primary ms-1" onClick={handleClearText}>clear Text</button>
            <button className="btn btn-primary ms-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary ms-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`mt-3 container my-5 text-${props.mode==='dark'?'light':'dark'}`}>
          <h1>Text area summary</h1>
          <p> {countWords(text)} words and {text.length} characters</p>
          <p> {0.08 * text.split(" ").length} min will take to read</p>
          <h2 className='mt-2'>Text preview</h2>
          <p>{text}</p>
        </div>
    </>
  )
}
