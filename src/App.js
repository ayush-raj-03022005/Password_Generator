import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { upperCaseLetters ,lowerCaseLetters,numbers,symbols} from './Data/PassChar';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let [Uppercase, setUppercase] = useState(false);
  let [Lowercase, setLowercase] = useState(false);
  let [Numbers, setNumbers] = useState(false);
  let [Symbols, setSymbols] = useState(false);
  let [Passwordlength, setPasswordlen] = useState(10);
  let [Password, setPassword] = useState('');

  let createPassword = () => {
    if(!Uppercase && !Lowercase && !Numbers && !Symbols) {
      toast.error("Please select at least one option to generate a password.");
    }
    else{
     let charset='';
      if(Uppercase) {
        charset += upperCaseLetters;
      }
      if(Lowercase) {
        charset += lowerCaseLetters;
      }
      if(Numbers) {
        charset += numbers ;
      }
      if(Symbols) {
        charset += symbols;
      }
      let password = '';
      for(let i=0; i<Passwordlength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      
      }
      setPassword(password);
    toast.success("Password generated successfully!");
  }}



  return (
    <>
      <ToastContainer />
    <div className='passwordbox'>
      <h2>Password Generator</h2>
      <div className='inputbox'>
      <input type="text" value={Password} readOnly className='inputbox' /> <button onClick={() => navigator.clipboard.writeText(Password)} >Copy</button>
    </div>
    <div className='passLength'>
      <label>Password length</label>
      <input type='number' max={20} min={10} value={Passwordlength} onChange={(e) => setPasswordlen(e.target.value)} />

    </div>
    <div className='passLength'>
      <label>Include Uppercase Letters</label>
      <input type='checkbox' checked={Uppercase} onClick={() => setUppercase(!Uppercase)} />

    </div>
    <div className='passLength'>
      <label>Include lowercase Letters</label>
      <input type='checkbox' checked={Lowercase} onClick={() => setLowercase(!Lowercase)} />

    </div>
    <div className='passLength'>
      <label>Include Numbers</label>
      <input type='checkbox' checked={Numbers} onClick={() => setNumbers(!Numbers)} />
      </div>
    <div className='passLength'>
      <label>Include Symbols</label>
      <input type='checkbox' checked={Symbols} onClick={() => setSymbols(!Symbols)} />
      </div>
      <button className='generate' onClick={createPassword}>Generate Password</button>

    </div>
    
    </>
  );
}

export default App;
