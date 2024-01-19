// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Home from '../pages/home/home';
import ROUTES from './routes';

export default function Router () {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
        </Routes>
    );
};