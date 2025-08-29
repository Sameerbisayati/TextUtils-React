import { use, useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import{BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
const[mode2,setMode2]=useState('blue');
const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
},2000);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
    document.title="Textutils-Dark mode";
  setInterval(()=>{
document.title='Textutils is amazing mode';
  },2000);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title="Textutils-Light mode";
    setInterval(()=>{
document.title='Install Textutils now';
    },1500);
  }
}
const toggleMode2=()=>{
if(mode2==='blue'){
  setMode2('green');
  document.body.style.backgroundColor="green";
  showAlert("Green mode has been enabled","success");
}
else{
  setMode2('blue');
  document.body.style.backgroundColor="white";
}
}
  return(
<>
{/* <BrowserRouter> */}
 <Navbar title="Textutils" mode2={mode2} toggleMode2={toggleMode2} mode={mode} toggleMode={toggleMode} aboutUs="About textutils"/>
<Alert alert={alert}/>

<div className="container my-4" mode={mode}>
  {/* <Routes>
     <Route exact path="/about"
            element={<About/>}>
          </Route> */}
          {/* <Route exact path="/"
element={<Textform  heading="Enter your text to analyze below " showAlert={showAlert} mode={mode}/>}> */}
          {/* </Route>
  </Routes>
</div> }
{/* </BrowserRouter> */}
          
<Textform  heading="Enter your text to analyze below " showAlert={showAlert} mode={mode}/>;
</div>

</>    
  );
}
export default App;
