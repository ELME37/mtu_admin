// Import des librairies React
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import ROUTES from './routes';
import Home from '../pages/home/home';
import Account from '../pages/account/account';
import Entretien from '../pages/entretien/entretien';
import Campaign2020 from '../pages/historical/campaign2020/campaign2020';
import Campaign2021 from '../pages/historical/campaign2021/campaign2021';
import Campaign2022 from '../pages/historical/campaign2022/campaign2022';
import Campaign2023 from '../pages/historical/campaign2023/campaign2023';
import Workers from '../pages/workers/workers';
import MyTeam from '../pages/myTeam/myTeam';
import Login from '../pages/login/login';
import Planning from '../pages/planning/planning';
import Reporting from '../pages/reporting/reporting';
import Error from '../pages/error/error';


export default function Router () {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.account} element={<Account />} />
            <Route path={ROUTES.entretien} element={<Entretien />} />
            <Route path={ROUTES.campaign2020} element={<Campaign2020 />} />
            <Route path={ROUTES.campaign2021} element={<Campaign2021 />} />
            <Route path={ROUTES.campaign2022} element={<Campaign2022/>} />
            <Route path={ROUTES.campaign2023} element={<Campaign2023 />} />
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.collaborateurs} element={<Workers />} />
            <Route path={ROUTES.myTeam()} element={<MyTeam />} />
            <Route path={ROUTES.planning} element={<Planning />} />
            <Route path={ROUTES.reporting} element={<Reporting />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};