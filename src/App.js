import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import { Navbar} from "./Components/Components";
import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PostBlog from "./Pages/PostBlog/PostBlog";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/Setting/Setting";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/write" element={<PostBlog />}/>
          <Route path="/setting" element={<Setting />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
