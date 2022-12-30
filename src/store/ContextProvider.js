import { useState } from "react";
import Context from "./Context";


const ContextProvider = (props)=>{
   const [token, setToken] = useState(null);

   console.log("token......",token)

      const navState = !!token  // note : this line

     const addTokenHandler = (newToken) =>{
       setToken(newToken)
     }

     const removeTokenHandler = () =>{
        setToken(null)
     }

    const values  = {
        token:token,
        navState:navState,
        addToken:addTokenHandler,
        removeToken:removeTokenHandler 
    }

    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;