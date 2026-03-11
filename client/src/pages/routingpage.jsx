import { lazy,Suspense  } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route,Routes} from "react-router-dom";
import HeaderPage from "./headerpage.jsx";
import Footerpage from "./footerpage.jsx";
// import AdminHeaderPage from "./adminpages/adminheader.jsx";
// import AdminFooterPage from "./adminpages/adminfooter.jsx";


export default function RoutingPage() {
    const HP= lazy(()=>import("./homepage.jsx"))
    const AP=lazy(()=>import("./about.jsx"))
    const SR= lazy(()=>import("./saree.jsx"))
    const LP= lazy(()=>import("./lehenga.jsx"))
    const JP = lazy(()=>import("./jewels.jsx"))
    const BP = lazy(()=>import("./bestseller.jsx"))
    const NP = lazy(()=>import("./newarrivals.jsx"))
    const LG = lazy(()=>import("./login.jsx"))
    const RG = lazy(()=>import("./register.jsx"))
    const AD = lazy(()=>import("./addproduct.jsx")) 
    const CP = lazy(()=>import(("./cartpage.jsx")))
    const SP=lazy(()=> import('./searchproduct.jsx'))
    const Vcp=lazy(()=> import('./viewcart.jsx'))
    const OP = lazy(()=>import('./orderpage.jsx'))
    const ADP = lazy(()=>import('./addresspage.jsx'))
    const PP = lazy(()=>import('./paymentpage.jsx'))
    const OS = lazy(()=>import('./ordersuccess.jsx'))
    const ADR = lazy(()=>import('./adminpages/adminregister.jsx'))
    const ADL = lazy(()=>import('./adminpages/adminlogin.jsx'))
    const DB = lazy(()=>import('./adminpages/dashboard.jsx'))
    const APD = lazy(()=>import('./adminpages/adminaddproduct.jsx'))
    const APP = lazy(()=>import('./adminpages/adminproducts.jsx'))
    const ADO = lazy(()=>import('./adminpages/adminorder.jsx'))
    const ADU = lazy(()=>import('./adminpages/adminuser.jsx'))
   
    

    return(
        <>
        <ErrorBoundary fallback={<div>Something went Wrong</div>}>
        <HeaderPage/>
        <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            <Route path="/" element={<HP/>}></Route>
            <Route path="/about" element={<AP/>}></Route>
            <Route path="/saree" element={<SR/>}></Route>
            <Route path="/lehenga" element={<LP/>}></Route>
            <Route path="/jewels" element={<JP/>}></Route>
            <Route path="/bestseller" element={<BP/>}></Route>
            <Route path="/newarrivals" element={<NP/>}></Route>
            <Route path="/login" element={<LG/>}></Route>
            <Route path="/register" element={<RG/>}></Route>
            <Route path = "/addproduct" element={<AD/>}></Route>
            <Route path = "/cartpage" element={<CP/>}></Route>
            <Route path="/searchproduct" element={<SP/>}></Route>
            <Route path="/viewcart" element={<Vcp/>}></Route>
            <Route path="/orderpage" element={<OP/>}></Route>
            <Route path="/addresspage" element={<ADP/>}></Route>
            <Route path="/paymentpage" element={<PP/>}></Route>
            <Route path="/ordersuccess" element={<OS/>}></Route>
            <Route path="/adminregister" element={<ADR/>}></Route>
            <Route path="/adminlogin" element={<ADL/>}></Route>
            <Route path="/dashboard" element={<DB/>}>
                 <Route path="adminaddproduct" element={<APD/>}></Route>
                    <Route path="adminproduct" element={<APP/>}></Route>
                    <Route path="adminorder" element={<ADO/>}></Route>
                     <Route path="adminuser" element={<ADU/>}></Route>
            </Route>
          
         </Routes>
        </Suspense>
        <Footerpage/>
        </ErrorBoundary>
        </>
    )

}