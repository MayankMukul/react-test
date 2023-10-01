import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <TextForm heading="TextUtils"></TextForm>
      </div>
    </>
  );
}

export default App;
