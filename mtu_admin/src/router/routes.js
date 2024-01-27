const ROUTES = {
    home: "/",
    account: "/account",
    entretien: "/entretien",
    campaign2020: "/historique/campagne 2020",
    campaign2021: "/historique/campagne 2021",
    campaign2022: "/historique/campagne 2022",
    campaign2023: "/historique/campagne 2023",
    login: "/login",
    collaborateurs: "/collaborateurs",
    myTeam: (collaborateur = ":id") => `/collaborateurs/${collaborateur}`,
    planning: "/planning",
    reporting: "/reporting",
};

export default ROUTES;