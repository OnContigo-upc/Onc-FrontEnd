import {createRouter, createWebHistory} from 'vue-router'
import PatientOverview from '../../oncontigo/pages/patient-overview.component.vue'
import Calendar from '../../oncontigo/pages/calendar.component.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/patient-overview",
            component: PatientOverview,
        },
        {
            path: "/calendar",
            component:Calendar
        }
    ],
});

export default router;
