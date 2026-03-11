
import { CountGol } from "./countcontext";
export default function CountHeader(){
    const {count,islogin}=CountGol();
    return(
        <>
        <div className="p-3 w-200 bg-yellow-300 m-3">
            {count}
        </div>
        {
            !islogin&& 
             <div className="bg-teal-600 w-45 text-amber-50 text-2xl">
      Login | Register
             </div>
        }

        {
            islogin&&
             <h4>Logout</h4>
        }
      
        </>
    )
}