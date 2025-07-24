import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/Login";
import Logout from "@/pages/auth/Logout";
import Company from "@/pages/company/Company";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/notFound/NotFound";
import Purchase from "@/pages/purchase/Purchase";
import Reports from "@/pages/reports/Reports";
import Sell from "@/pages/sell/Sell";

const Data = [
    {
        path:"/auth/login",
        Component:Login
    },
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                path:"dashboard",
                Component:Dashboard
            },
            {
                path:"company",
                Component:Company
            },
            {
                path:"purchase",
                Component:Purchase
            },
            {
                path:"sell",
                Component:Sell
            },
            {
                path:"reports",
                Component:Reports
            },
            {
                path:'logout',
                Component:Logout
            }
        ]
    },
    {
        path:"*",
        Component:NotFound
    }
]

export default Data;