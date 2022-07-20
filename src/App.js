import "./app.css";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <div>
      <div className="container">
        <Sidebar />
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="user" element={<UserList />} />
              <Route path="user/:userId" element={<User />} />  
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
