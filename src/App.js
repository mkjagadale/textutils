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

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000080';
      showAlert('dark Mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode enabled', 'success');
    }
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
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} homeText="Home" aboutText="About Us"/>
          <Alert showAlert={showAlert} alert={alert}/>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/" element={ */}
            <TextForm mode={mode}  showAlert={showAlert} heading="Enter Text"/>
            {/* }/>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
