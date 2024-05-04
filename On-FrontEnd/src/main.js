import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';


import Menubar from "primevue/menubar";

import Steps from 'primevue/steps';

import Dialog from 'primevue/dialog';
import Dropdown from "primevue/dropdown";
import InputText from 'primevue/inputtext';
import Calendar from "primevue/calendar";
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
//Router
import router from "@/router";
import AutoComplete from "primevue/autocomplete";

import Card             from 'primevue/card';
import Button           from 'primevue/button';
import SelectButton     from 'primevue/selectbutton';
import Sidebar          from 'primevue/sidebar';
import Avatar           from 'primevue/avatar';
import Menu             from 'primevue/menu';
import MenuBar          from 'primevue/menubar';
import Toolbar          from 'primevue/toolbar';
import DataTable  from "primevue/datatable";
import Column from 'primevue/column'
import Row from 'primevue/row'
import VirtualScroller from "primevue/virtualscroller";

createApp(App)
    .use(PrimeVue, { ripple: true})
    .component('pv-card',Card)
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-sidebar',Sidebar)
    .component('pv-avatar',Avatar)
    .component('pv-vscroller', VirtualScroller)
    .component('pv-menu',Menu)
    .component('pv-menu-bar',MenuBar)
    .component('pv-toolbar',Toolbar)
    .component('pv-datatable', DataTable)
    .component('pv-row',Row)
    .component('pv-column',Column)
    .component('pv-autocomplete', AutoComplete)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-steps', Steps)
    .component('pv-dropdown', Dropdown)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-input-text', InputText)
    .component('pv-calendar', Calendar)
    .component('pv-confirm-dialog', ConfirmDialog)
    .use(router)
    .use(ConfirmationService)
    .mount('#app')
