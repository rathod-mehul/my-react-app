// import logo from './logo.svg';
// import './App.css';
// import Functioncomponent from './funtion_component';
// import Classcomonent from './class_componet';

// bootstrap admin template import

import Dashboard from "./content/Dashboard";
import  Navabar  from "./layout/Navabar";
import  Sidebar  from "./layout/Sidebar";
import './assets/css/admin.css';
import './assets/css/mdb.min.css';
// import Navbar from "./layout/Navabar";
// import Slidebar from "./layout/Sidebar";
// import Footer from "./layout/Footer";


// import Stats1 from "./practice_folder/stats_folder/Stats1";
// import Hover from "./practice_folder/stats_folder/Hover";

//import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Practice from "./practice_folder/Practice";
function App() {
  return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>

    // <Functioncomponent />
    // <Classcomonent />

    //     </div>

    <>
      {/* <Navbar compnayName/>
      <Slidebar menu={['hoem','about']}/>*/}
      {/* <Footer details={{name:'user1',mobile:5271679529}}/>  */}
      {/* <Footer details={['name','user1','mobile',5271679529]}/>  */}

      {/* <Stats1/> */}
      {/* <Hover/> */}

      <Practice/>

      {/* <Navabar/>
      <Sidebar/>

      <Dashboard/> */}
</>
  );
}



export default App;
