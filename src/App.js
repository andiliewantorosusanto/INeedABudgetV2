import "./app.css";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="user" element={<UserList />} />
            <Route path="user/:userId" element={<User />} />  
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
