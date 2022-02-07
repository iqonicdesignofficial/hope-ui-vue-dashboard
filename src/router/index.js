import { createRouter, createWebHistory } from 'vue-router'

const simplechildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.uisheet',
    meta: { auth: true, name: 'UiSheet' },
    component: () => import('../views/Uikit/UiSheet')
  }
]
const authchildRoutes = (prop, mode = false) => [
  {
    path: '/signin',
    name: prop + '.signin',
    meta: { auth: true, name: 'SignIn' },
    component: () => import('../views/pages/Authentication/SignIn')
  },
  {
    path: '/signup',
    name: prop + '.signup',
    meta: { auth: true, name: 'SignUp' },
    component: () => import('../views/pages/Authentication/SignUp')
  },
  {
    path: '/confirmMail',
    name: prop + '.confirmMail',
    meta: { auth: true, name: 'Confirm Mail' },
    component: () => import('../views/pages/Authentication/ConfirmMail')
  },
  {
    path: '/lockScreen',
    name: prop + '.lockScreen',
    meta: { auth: true, name: 'Lock Screen' },
    component: () => import('../views/pages/Authentication/LockScreen')
  },
  {
    path: '/recoverPassword',
    name: prop + '.recoverPassword',
    meta: { auth: true, name: 'Recover password' },
    component: () => import('../views/pages/Authentication/RecoverPassword')
  },
  // Error Pages
  {
    path: 'error404',
    name: prop + '.error404',
    meta: { auth: true, name: 'Error404' },
    component: () => import('../views/pages/Utilities/Error404')
  },
  {
    path: 'error500',
    name: prop + '.error500',
    meta: { auth: true, name: 'Error500' },
    component: () => import('../views/pages/Utilities/Error500')
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true, name: 'maintenance' },
    component: () => import('../views/pages/Utilities/Maintenance')
  }
]
const boxedfancychildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.IndexBoxedFancy',
    meta: { auth: true, name: 'IndexBoxedFancy' },
    component: () => import('../views/main/dashboard')
  }
]
const boxedchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.IndexBoxedHorizontal',
    meta: { auth: true, name: 'IndexBoxedHorizontal' },
    component: () => import('../views/main/dashboard')
  }
]
const dualcompactchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.IndexDualCompact',
    meta: { auth: true, name: 'IndexDualCompact' },
    component: () => import('../views/main/dashboard')
  }
]
const dualhorizontalchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.IndexDualHorizontal',
    meta: { auth: true, name: 'IndexDualHorizontal' },
    component: () => import('../views/main/dashboard')
  }
]
const horizontalchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.IndexHorizontal',
    meta: { auth: true, name: 'IndexHorizontal' },
    component: () => import('../views/main/dashboard')
  }
]
const defaultchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'dashboard' },
    component: () => import('../views/main/dashboard')
  },
  // User Pages
  {
    path: 'UserAdd',
    name: prop + '.UserAdd',
    meta: { auth: true, name: 'UserAdd' },
    component: () => import('../views/pages/Users/UserAdd')
  },
  {
    path: 'UserList',
    name: prop + '.UserList',
    meta: { auth: true, name: 'UserList' },
    component: () => import('../views/pages/Users/UserList')
  },
  {
    path: 'UserProfile',
    name: prop + '.UserProfile',
    meta: { auth: true, name: 'User Profile' },
    component: () => import('../views/pages/Users/UserProfile')
  },
  {
    path: 'UserPrivacySetting',
    name: prop + '.UserPrivacySetting',
    meta: { auth: true, name: 'UserPrivacySetting' },
    component: () => import('../views/pages/Users/UserPrivacySetting')
  },
  // Special Pages
  {
    path: 'billing',
    name: prop + '.billing',
    meta: { auth: true, name: 'Billing' },
    component: () => import('../views/pages/Special Pages/Billing')
  },
  {
    path: 'calender',
    name: prop + '.calender',
    meta: { auth: true, name: 'Calender' },
    component: () => import('../views/pages/Special Pages/Calender')
  },
  {
    path: 'kanban',
    name: prop + '.kanban',
    meta: { auth: true, name: 'Kanban' },
    component: () => import('../views/pages/Special Pages/kanban')
  },
  {
    path: 'Pricing',
    name: prop + '.Pricing',
    meta: { auth: true, name: 'Pricing' },
    component: () => import('../views/pages/Special Pages/Pricing')
  },
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'TimeLine' },
    component: () => import('../views/pages/Special Pages/Timeline')
  },
  {
    path: 'admin',
    name: prop + '.admin',
    meta: { auth: true, name: 'admin' },
    component: () => import('../views/pages/admin')
  },
  // Widget pages
  {
    path: 'widgetbasic',
    name: prop + '.widgetbasic',
    meta: { auth: true, name: 'Widget Basic' },
    component: () => import('../views/Elements/widget/WidgetBasic')
  },
  {
    path: 'widgetcard',
    name: prop + '.widgetcard',
    meta: { auth: true, name: 'Widget Card' },
    component: () => import('../views/Elements/widget/WidgetCard')
  },
  {
    path: 'widgetchart',
    name: prop + '.widgetchart',
    meta: { auth: true, name: 'Widget Chart' },
    component: () => import('../views/Elements/widget/WidgetChart')
  },
  // Form pages
  {
    path: 'elements',
    name: prop + '.elements',
    meta: { auth: true, name: 'Elements' },
    component: () => import('../views/Elements/Form/Elements')
  },
  {
    path: 'validation',
    name: prop + '.validation',
    meta: { auth: true, name: 'validation' },
    component: () => import('../views/Elements/Form/Validation')
  },
  {
    path: 'wizard',
    name: prop + '.wizard',
    meta: { auth: true, name: 'Wizard' },
    component: () => import('../views/Elements/Form/Wizard')
  },
  // Icons pages
  {
    path: 'dualtone',
    name: prop + '.dualtone',
    meta: { auth: true, name: 'Dual Tone' },
    component: () => import('../views/Elements/Icons/DualTone')
  },
  {
    path: 'outlined',
    name: prop + '.outlined',
    meta: { auth: true, name: 'Outlined' },
    component: () => import('../views/Elements/Icons/Outlined')
  },
  {
    path: 'solid',
    name: prop + '.solid',
    meta: { auth: true, name: 'Solid' },
    component: () => import('../views/Elements/Icons/Solid')
  },
  // Maps pages
  {
    path: 'google',
    name: prop + '.google',
    meta: { auth: true, name: 'Google' },
    component: () => import('../views/Elements/Maps/Google')
  },
  {
    path: 'vector',
    name: prop + '.vector',
    meta: { auth: true, name: 'Vector' },
    component: () => import('../views/Elements/Maps/Vector')
  },
  // Table pages
  {
    path: 'bootstrap-table',
    name: prop + '.bootstraptable',
    meta: { auth: true, name: 'Bootstrap Table' },
    component: () => import('../views/Elements/Table/BootstrapTable')
  },
  {
    path: 'datatable',
    name: prop + '.datatable',
    meta: { auth: true, name: 'Datatable' },
    component: () => import('../views/Elements/Table/Datatable')
  },
  // Footer Pages
  {
    path: 'privacypolicy',
    name: prop + '.privacypolicy',
    meta: { auth: true, name: 'privacypolicy' },
    component: () => import('../views/Elements/Extra/PrivacyPolicy')
  },
  {
    path: 'termsofservice',
    name: prop + '.termsofservice',
    meta: { auth: true, name: 'TermsOfService' },
    component: () => import('../views/Elements/Extra/TermsOfService')
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/simple'),
    children: simplechildRoutes('hope')
  },
  {
    path: '/boxedFancy',
    name: 'boxedFancy',
    component: () => import('../layouts/boxed-fancy'),
    children: boxedfancychildRoutes('boxedfancy')
  },
  {
    path: '/boxed',
    name: 'boxed',
    component: () => import('../layouts/boxed'),
    children: boxedchildRoutes('boxed')
  },
  {
    path: '/default',
    name: 'default',
    component: () => import('../layouts/default'),
    children: defaultchildRoutes('default')
  },
  {
    path: '/dualCompact',
    name: 'dualCompact',
    component: () => import('../layouts/dual-compact'),
    children: dualcompactchildRoutes('dual-compact')
  },
  {
    path: '/dualHorizontal',
    name: 'dualHorizontal',
    component: () => import('../layouts/dual-horizontal'),
    children: dualhorizontalchildRoutes('dual-horizontal')
  },
  {
    path: '/horizontal',
    name: 'horizontal',
    component: () => import('../layouts/horizontal'),
    children: horizontalchildRoutes('horizontal')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../layouts/simple'),
    children: authchildRoutes('auth')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes

})

export default router
