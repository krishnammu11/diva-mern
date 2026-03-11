import {createContext,useContext,useState,useEffect} from "react";
import axios from "axios";
const CountVar=createContext();

export const CountProvider=({children})=>{
    const [cartcount,setCartCount]=useState(0)
    const [count,setCount]=useState("")
    useEffect(() => {
      let api = "http://localhost:9000/user/cartcount";
      axios
        .get(api,{headers:{userid:sessionStorage.getItem("user_id")}})
        .then((response) => {
          console.log(response.data);
          setCount(Number(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    })
    
    const [islogin,setIsLogin]=useState(false)
    return(
        <>
        <CountVar.Provider value={{count,setCount,islogin,setIsLogin}}>
          {children}
        </CountVar.Provider>
         
        </>
    )

}

export const CountGol=()=>useContext(CountVar)