import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';

function App() {
  return (
    <>
  
        <div class="row gx-0">
          <div class="col-md-6">
          <Login />

          </div>
          <div class="col-md-6">
            <Homepage />

          </div>
        </div>

  


    </>
  );
}

export default App;
