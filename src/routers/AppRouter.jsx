import { Route, Routes } from "react-router-dom"


import { LoginPages } from "../auth/pages/LoginPages"
import { HeroesRouters } from "../heroes/routers/HeroesRouters"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route
                    path="/login"
                    element={
                        <PublicRoutes>
                            <LoginPages />
                        </PublicRoutes>
                    }
                />



                <Route path="/*" element={
                    <PrivateRoutes>
                        <HeroesRouters />
                    </PrivateRoutes>
                } />


            </Routes>

        </>
    )
};






