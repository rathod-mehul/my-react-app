import { propTypes } from "react-bootstrap/esm/Image";
import Dashboard from "../content/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link,
} from "react-router-dom";
import StyleComponent from '../practice_folder/style/StyleCompont';

export default function Sidebar() {
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
          <div>
            <Link to="name">
              <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>input value send using redux </span>
            </Link>
          </div>
          <div>
            <Link to='todolist'>
              <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span>My Todo list component</span>
            </Link>
          </div>
          <div>
            <Link to='localstotagrtodo'>
            <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span>LocalStorageTodo component</span>
            </Link>
          </div>
          <div>
            <Link to={'projectform'}>
            <i className="fas fa-tachometer-alt fa-fw me-3 "></i><span>project form </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}