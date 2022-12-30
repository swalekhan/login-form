import { useState } from "react";
import Context from "./Context";


const ContextProvider = (props)=>{
   const [token, setToken] = useState();
   const [navState, setNavState] = useState(false)

   console.log("token......",token)
      
     const addTokenHandler = (newToken) =>{
       setToken(newToken)
       setNavState(true)
     }

     const removeTokenHandler = () =>{
        setToken("")
        setNavState(false)
     }

    const values  = {
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