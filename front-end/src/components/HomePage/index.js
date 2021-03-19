import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";

function HomePage(){

    const { loginWithRedirect } = useAuth0();

  return (
    <div> 
        
        <p>Welcome to our Movie App</p>
        <p>Please log in to continue</p>
        <Button name={"Login"} onClick={loginWithRedirect}/>
     </div>
  );
};

export default HomePage;