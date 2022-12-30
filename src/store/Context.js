import { createContext } from "react";
const Context = createContext({
    token: "",
    navState: null,
    addToken: () => { },
    removeToken: () => { }
});


export default Context;
