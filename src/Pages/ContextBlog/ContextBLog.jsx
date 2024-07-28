/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const MyContext = createContext();
export const useMyContext = () =>{
    return useContext(MyContext)
}
export const ContextBLog = ({children}) => {
    const [latestBlog, setLatestBlog] = useState([]);
    const allObj = {
        latestBlog, setLatestBlog
    }
    return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>
};
