import { lazy } from 'react'

const AllMails = lazy(() => import('../pages/AllMails/AllMails'))
const ForwardMails = lazy(() => import('../pages/ForwardMails/ForwardMails'))

const AppRoutes = [
  {
    id: 1,
    pathName: '/',
    component: AllMails,
  },
  {
    id: 2,
    pathName: '/forwardMail',
    component: ForwardMails,
  },
]

export default AppRoutes
