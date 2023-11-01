import logo from './logo.svg';
import './App.css';
import {googleSignUp,signOutConfig} from './config/firebase';
import VendorProfile from './Components/VendorProfile'

function App() {
  function googleSignUp1(){
    googleSignUp();
  }
  function signOut1(){
    signOutConfig();
  }
  return (
    <div className="App">
      <button onClick={ googleSignUp1   }>google sign up</button>
      <button onClick={signOut1} > sign out  </button>
      <VendorProfile/>
    </div>
  );
}

export default App;
