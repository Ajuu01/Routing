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
import css from'./App.module.css'
function App() {
  return (
    <BrowserRouter>
      <nav className={css.navBar}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </nav>
      <h1 style={{color:"blue"}}>{Math.random()*10>5 ? <h1>{Math.random()*10} is more than 5.</h1> : <h1>{Math.random()*10} is less than 5.</h1>}</h1>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/examples" Component={Example}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
