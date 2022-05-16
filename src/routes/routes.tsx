import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/home';
import { Layout } from '../pages/layout';
import { Bag } from '../pages/bag';
import { NoPage } from '../pages/noPage';
import { Product } from '../pages/product';
import { Profile } from '../pages/profile';
import { Favorites } from '../pages/favorites';

export function Router() {
    return (

        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='bag' element={<Bag />} />
                <Route path='/product' element={<Product />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    )

}