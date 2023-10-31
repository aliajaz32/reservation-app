import logo from './logo.svg';
import './App.css';
import {googleSignUp,signOutConfig} from './config/firebase';

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
    </div>
  );
}

export default App;
