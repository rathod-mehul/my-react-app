import { propTypes } from "react-bootstrap/esm/Image";
import Dashboard from "../content/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import StyleComponent from '../practice_folder/style/StyleCompont';


function Slidebar(props){
    return(
        // <div>this is a Slidebar {props.menu[1]} </div>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
           <div>
            <Link to="/">
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init aria-current="true">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
            </a>
            </Link>

            <Link to="/style">
            <a href="#" className="list-group-item list-group-item-action py-2 active" data-mdb-ripple-init>
              <i className="fas fa-chart-area fa-fw me-3"></i><span>Website traffic </span>
            </a>
            </Link>

            <Routes>
                        <Route
                            path="/"
                            element={<Dashboard />}
                        ></Route>
                        <Route
                            path="/style"
                            element={<StyleComponent />}
                        ></Route>
                    </Routes>
           </div>
           
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
              <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
          </div>
        </div>
      </nav>
    )
}
import { Form } from "react-router-dom";

export default Slidebar;