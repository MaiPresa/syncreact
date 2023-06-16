import { Routes, Route } from "react-router-dom"
import { Description } from "../pages/description/Description"
import { Extra } from "../pages/extra/Extra"
import { Features } from "../pages/features/Features"
import { Screens } from "../pages/screens/Screens"

function Router() {
    return(
            <Routes>
                <Route path='/' element={<Description/>} />
                <Route path='/features' element={<Features/>}/>
                <Route path='/screens' element={<Screens/>}/>
                <Route path='/extra' element={<Extra/>}/>
            </Routes>
    )
}

export default Router;