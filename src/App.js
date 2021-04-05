import './App.css';
import {useAuth} from "./auth-context";
import {AuthenticatedRoutes, UnauthenticatedRoutes} from "./router";
import {Login} from './components/login';
import About from './components/about';
import {Profile} from './components/profile';
import Home from './components/home';
import Tasklist from './components/tasklist';
import { Layout, Menu } from 'antd';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const { Header, Content, Footer } = Layout;
function App() {
  const { loggedIn } = useAuth();
  
  console.log(`LoggedIn ${loggedIn}`);

  // return loggedIn ? <Layerpage /> : <Login />

  return (
  <Layout className="layout">
  <Header>
    <div className="logo" />
    <Router>
    <div> 
    <Menu theme="dark" mode="horizontal">    
    <Menu.Item key="/profile"><Link to="/profile">Profile</Link></Menu.Item>
    <Menu.Item key="/home"><Link to="/home">Home</Link></Menu.Item>
    <Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>
    <Menu.Item key="/tasklist"><Link to="/tasklist">Tasklist</Link></Menu.Item>
    </Menu>
    </div>     
  <Switch>
      <Route exact path="/tasklist">
      <Tasklist/>
    </Route>
    <Route exact path="/profile">
    <Profile/>
    </Route>
    <Route exact path="/home">
      <Home/>
    </Route>
    <Route exact path="/about">
      <About/>
    </Route>
    <Route exact path="/login">
      <About/>
    </Route>
  </Switch>
  </Router>
  </Header>
  
</Layout>
);

  // return loggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />


}

export default App;
