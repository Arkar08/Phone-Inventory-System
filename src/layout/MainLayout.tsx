
import { Outlet } from 'react-router-dom'
import SideLayout from './SideLayout'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const MainLayout = () => {
  return (
    <div className="select-none overflow-hidden">
      <SidebarProvider defaultOpen={true}>
        <SideLayout />
         <div className="flex flex-col w-[100%]">
            <div className="h-[60px] border-b-2 flex justify-between items-center px-[1rem] bg-[#59008c] w-[100%]">
              <div className="flex items-center gap-5">
                <h3 className="text-xl font-semibold text-white">Phone Inventory System</h3>
                <SidebarTrigger className="cursor-pointer mt-2 text-white"/>
              </div>
              {/* <Bell className="cursor-pointer"/> */}
            </div>
            <div className="px-5 py-2">
              <Outlet />
            </div>
         </div>
      </SidebarProvider>
    </div>
  )
}

export default MainLayout
