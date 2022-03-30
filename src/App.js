import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Error from './component/Error'
import Job from './component/Job'
import JobDetails from './component/JobDetails'
import Judge from './component/Judge'
import Login from './component/Login'
import Register from './component/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          nav
          <br />
          <Link to="/">Home</Link>
          <br />
          nav
        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Job" element={<Job />}/>

          {/* <Route path="" elemetnt={}/> */}


          {/* Handling error routes */}
          <Route path="*" element={ <Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
