import React from 'react';
import {useAuth} from "../auth-context";

export function Dashboard(){
    const {logout} = useAuth();
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }