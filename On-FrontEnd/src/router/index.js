import {createRouter, createWebHistory} from 'vue-router'
import PatientOverview from '../../oncontigo/pages/patient-overview.component.vue'
import Calendar from '../../oncontigo/pages/calendar.component.vue'
import CrearCuenta from "../../public/pages/CrearCuenta.vue"
import Header from '../../public/components/Header.vue'
import IniciarSesion from "../../public/pages/IniciarSesion.vue";
import Dashboard from "../../public/pages/Dashboard.vue";
import LandingPage from "../../oncontigo/pages/landing-page.component.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"",
            component:LandingPage,
            meta: {
                hideHeader: true,
            }
        },
        {
            path: "/crear-cuenta",
            component:CrearCuenta

        },

        {
            path: "/patient-overview/:idDoctor",
            component: PatientOverview,
            name:PatientOverview,

        },
        {
            path: "/calendar",
            component: Calendar,
            name:Calendar
        },
        {
            path:"/header",
            component:Header
        },
        {
            path:"/login",
            component:IniciarSesion
        },
        {
            path:"/dashboard-doctor/:id",
            component:Dashboard
        }
    ],
});

export default router;
