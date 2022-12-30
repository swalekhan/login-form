import { useState } from "react";
import Context from "./Context";


const ContextProvider = (props) => {
    const intialStoreTokenInLocalStorage = localStorage.getItem("token")
    const [token, setToken] = useState(intialStoreTokenInLocalStorage);

    const navState = !!token  // note : this line

    const addTokenHandler = (newToken) => {
        setToken(newToken)
        localStorage.setItem("token", newToken)
    }

    const removeTokenHandler = () => {
        setToken(null)
        localStorage.removeItem("token");
    }

    const values = {
        token: token,
        navState: navState,
        addToken: addTokenHandler,
        removeToken: removeTokenHandler
    }

    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;