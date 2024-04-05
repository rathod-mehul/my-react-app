import { propTypes } from "react-bootstrap/esm/Image";
import Dashboard from "../content/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link,
} from "react-router-dom";
import StyleComponent from '../practice_folder/style/StyleCompont';

export default function Sidebar(props) {
  console.log('sidebar rendered');
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <div>
            <Link to="/">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>main dashboard</span>
            </Link>
          </div>
          <div>
            <Link to="/user2">  
              <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>user2</span>
            </Link>
          </div>
          <div>
            <Link to="/form-validation">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>form validation</span>
            </Link>
          </div>
          <div>
            <Link to="/users/1">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>user details</span>
            </Link>
          </div>
          <div>
            <Link to="posts">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Posts</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}