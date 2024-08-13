// import logo from './logo.svg';
// import './App.css';
// import './components/Counter.jsx'
// import './components/TextBox.jsx'
// import TextBox from './components/TextBox.jsx';
// import Counter from './components/Counter.jsx';
// import Message from './components/message.js';
// import Example from "./components/Example.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Example from "./components/Example.jsx";
import { BrowserRouter,Route,Link,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/examples">Examples</Link>
      </nav>
      <h1 style={{color:"blue"}}>This is my react app.</h1>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/examples" Component={Example}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
