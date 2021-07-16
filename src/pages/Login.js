import React from 'react';
import { useToggle } from '../context/ToggleProvider';

function Login() {

    const {isLoggedIn, handleLogin} = useToggle();

  return (
    <div>
      {!isLoggedIn &&  
        <div>
            <h1>Clique no botão abaixo para fazer login</h1>
            <button 
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
      }
      {isLoggedIn &&  
        <div>
            <h1>Clique no botão abaixo para fazer logout</h1>
            <button 
                onClick={handleLogin}
            >
                Logout
            </button>
        </div>
      }
    </div>
  );
}

export default Login;