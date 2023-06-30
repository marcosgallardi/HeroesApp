import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui';

import { MarvelPage, DcPages, Search, Hero } from '../pages';

export const HeroesRouters = () => {

    return (

        <>

            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPages />} />
                    <Route path="Search" element={<Search />} />
                    <Route path="Hero/:id" element={<Hero />} />


                    <Route path="/" element={<Navigate to="/marvel" />} />

                </Routes>

            </div>

        </>
    )
}



