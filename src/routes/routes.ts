import {Home, Contact, Features} from "../pages";
import MainLayout from "../components/layout/MainLayout";

const routes = [
    {
        path: '/',
        exact: true,
        layout: MainLayout,
        component: Home,
    },
    {
        path: '/contact',
        exact: true,
        layout: MainLayout,
        component: Contact,
    },
    {
        path: '/features',
        exact: true,
        layout: MainLayout,
        component: Features,
    }
];

export default routes;
