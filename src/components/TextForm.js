import React, {useState} from 'react'

export default function TextForm(props) {

  const [containerColorForTextForm, setcontainerColorForTextForm] = useState('rgb(13, 110, 253)');
  React.useEffect(() => {
    let navBGColor = findBgColor();
    setcontainerColorForTextForm(navBGColor);
  }, [props.mode])

  let textStyle = {
    backgroundColor: props.containerColor,
    filter: 'invert(100%)',
    margin: '1%'
  }
  
  let containerStyle = {
    maxWidth: '100%',
    margin: '0',
    backgroundColor: containerColorForTextForm,
    filter: 'invert(100%)',
    position: 'absolute',
    marginBottom: '0px',
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

  const findBgColor = () => {
    let myDivObj = document.getElementById("nav")
    let eleBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    return eleBgColor;
  }
  const [text, setText] = useState('Enter text Here');
  return (
    <>
        <div className={`container bg-lighten-xl`} style={{...containerStyle, backgroundColor: containerColorForTextForm}}>
            <div className={`mb-3 text-${props.mode==='dark'? 'light' : 'dark'}`}>
                <h1 className='mt-4'>{props.heading}</h1>
                <textarea className='form-control' id="myBox1" rows="8" value={text} onChange={handleOnChange} onBlur={handleOnBlur} onClick={handlOnclick}></textarea>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-4 col-xs-12">
              <button className={`btn btn-pill btn-${props.mode}`} style={textStyle} onClick={handleUpClick}>Convert To Uppercase</button>
              <button className={`btn btn-pill btn-${props.mode}`} style={textStyle} onClick={handledownClick}>Convert To LowerCase</button>
              <button className={`btn btn-pill btn-${props.mode}`} style={textStyle} onClick={handleClearText}>Clear Text</button>
              <button className={`btn btn-pill btn-${props.mode}`} style={textStyle} onClick={handleCopyText}>Copy Text</button>
              <button className={`btn btn-pill btn-${props.mode}`} style={textStyle} onClick={handleExtraSpaces}>Remove Extra Spaces</button>            
            </div>    
          <div className={`mb-3 my-5 text-${props.mode==='dark'? 'light' : 'dark'}`}>
            <h1>Text area summary</h1>
            <p> {countWords(text)} words and {text.length} characters</p>
            <p> {0.08 * text.split(" ").length} min will take to read</p>
            <h2 className='mt-2'>Text preview</h2>
            <p>{text}</p>
          </div>
        </div>
    </>
  )
}
