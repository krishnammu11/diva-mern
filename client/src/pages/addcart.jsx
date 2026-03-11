import { CountGol } from "./countcontext.jsx"
export default function AddCart(){
  const {count,setCount}=CountGol()
    return(
        <>
        <button
         className="rounded w-45 bg-violet-700 hover:bg-sky-200 p-3"
        onClick={()=>setCount(count+1)}>
            AddCart
        </button>
        
        </>
    )
}