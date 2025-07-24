
import { Outlet } from 'react-router-dom'
import SideLayout from './SideLayout'

const MainLayout = () => {
  return (
    <div>
        <SideLayout />
        <Outlet />
    </div>
  )
}

export default MainLayout
