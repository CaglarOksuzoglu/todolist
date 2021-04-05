import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Dashboard} from './components/dashboard';
import {Home} from './components/home';
import {Login} from './components/login';
import {Profile} from './components/profile';
import {useAuth} from './auth-context';

export const AuthenticatedRoutes = () => {
  const {logout} = useAuth();
  return (<div>
    <h2>Profile</h2>
    <button onClick={logout}>Logout</button>
  </div>);
}

export const UnauthenticatedRoutes = () => {
  const {login} = useAuth();
return (<div>
  <h2>Login</h2>
  <button onClick={login}>Login</button>
</div>);
}


// export const AuthenticatedRoutes = () => {

//     return (

// <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//       </div>
// <hr/>
//     <Switch>
//       <Route exact path="/dashboard">
//         <Dashboard/>
//       </Route>
//       <Route path="/profile">
//         <Profile/>
//       </Route>
//     </Switch>
//     </Router>
//     )
// }

// export const UnauthenticatedRoutes = () => {
// return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//       </div>
// <hr/>
//     <Switch>
//       <Route exact path="/">
//         <Home/>
//       </Route>
//       <Route path="/about">
//         <About/>
//       </Route>
//       <Route path="/profile">
//         <Profile/>
//       </Route>
//     </Switch>
//     </Router>
//     );
// }