import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/Login";
import Logout from "@/pages/auth/Logout";
import Category from "@/pages/category/Category";
import Company from "@/pages/company/Company";
import Dashboard from "@/pages/dashboard/Dashboard";
import NotFound from "@/pages/notFound/NotFound";
import Purchase from "@/pages/purchase/Purchase";
import PurchaseReport from "@/pages/reports/purchaseReport/PurchaseReport";
import Reports from "@/pages/reports/Reports";
import SellReport from "@/pages/reports/sellReport/SellReport";
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
                path:"category",
                Component:Category
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
                Component:Reports,
            },
            {
                path:"reports/sell",
                Component:SellReport
            },
            {
                path:'reports/purchase',
                Component:PurchaseReport
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