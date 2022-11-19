import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Routes from './components/Routes/Routes';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
   <Routes></Routes>
   <ToastContainer autoClose={1000} position="top-right" toastStyle={{ backgroundColor: "rgba(255, 249, 166, 0.9)", color: "#000", fontSize: "20px" }} />
 
    </>
  );
}

export default App;
