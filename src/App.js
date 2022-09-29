import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import { 
//   BrowserRouter as Router,
//   Routes,
//   Route
//  } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('primary');
  const [alert, setAlert] = useState(null);
 
  const removeColors = () => {
    document.body.className = "";
    setMode(null);
  }

  const toggleMode = (themeClass) => {
    removeColors();
    setMode(themeClass);
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
        <div>
          <Navbar title="TextUtils" mode={mode} setMode={setMode} toggleMode={toggleMode} homeText="Home" aboutText="About Us"/>
          <Alert showAlert={showAlert} alert={alert}/>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/" element={ */}
            <TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert} heading="Enter Text"/>
            {/* }/>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
