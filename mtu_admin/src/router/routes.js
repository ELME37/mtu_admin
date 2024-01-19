import MyTeam from "../pages/myTeam/myTeam";

const ROUTES = {
    home: "/",
    account: "/account",
    entretien: "/entretien",
    campaign2020: "/historique/campagne 2020",
    campaign2021: "/historique/campagne 2021",
    campaign2022: "/historique/campagne 2022",
    campaign2023: "/historique/campagne 2023",
    login: "/login",
    myTeam: (myTeam = ":id") => `/mon équipe/${MyTeam}`,
    planning: "/planning",
    reporting: "/reporting",
};

export default ROUTES;