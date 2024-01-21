import Home from "../pages";
import MainLayout from "../components/layout/MainLayout";

const routes = [
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: Home,
    }
];

export default routes;
