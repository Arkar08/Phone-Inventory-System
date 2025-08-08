
import { Outlet } from 'react-router-dom'
import SideLayout from './SideLayout'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const MainLayout = () => {
  return (
    <div className="select-none overflow-hidden">
      <SidebarProvider defaultOpen={true}>
        <SideLayout />
         <div className="flex flex-col w-[100%]">
            <div className="h-[60px] border-b-2 flex justify-between items-center px-[1rem] w-[100%] bg-[var(--sidebar)]">
              <div className="flex items-center gap-5">
                <h3 className="text-2xl font-semibold text-[#09c1ef]">Phone Inventory System</h3>
                <SidebarTrigger className="cursor-pointer mt-2 text-[#09c1ef]"/>
              </div>
              {/* <Bell className="cursor-pointer"/> */}
            </div>
            <div className="px-5 py-2 bg-[#f8f8fcdd] h-full">
              <Outlet />
            </div>
         </div>
      </SidebarProvider>
    </div>
  )
}

export default MainLayout
