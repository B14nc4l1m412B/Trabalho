import { Routes, Route} from "react-router-dom"

import Casa from "./pages/Casa"
import User from "./pages/User"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Casa />} />
            <Route path="/usuarios" element={<User />} />
        </Routes>
    )
}

export default Router