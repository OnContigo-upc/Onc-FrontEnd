import {createRouter, createWebHistory} from 'vue-router'
import PatientOverview from '../../oncontigo/pages/patient-overview.component.vue'
import Calendar from '../../oncontigo/pages/calendar.component.vue'
import CrearCuenta from "../../public/pages/CrearCuenta.vue"
import Header from '../../public/components/Header.vue'
import IniciarSesion from "../../public/pages/IniciarSesion.vue";
import Dashboard from "../../public/pages/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: "",
          component:CrearCuenta

        },
        {
            path: "/patient-overview/:idDoctor",
            component: PatientOverview,
        },
        {
            path: "/calendar",
            component: Calendar
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
            path:"/dashboard",
            component:Dashboard
        },
    ],
});

export default router;
