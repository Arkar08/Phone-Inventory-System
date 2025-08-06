import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/auth/Login";
import Logout from "@/pages/auth/Logout";
import Category from "@/pages/category/Category";
import Company from "@/pages/company/Company";
import Dashboard from "@/pages/dashboard/Dashboard";
import CreateItem from "@/pages/Items/CreateItem";
import ItemList from "@/pages/Items/ItemList";
import Items from "@/pages/Items/Items";
import UpdateItem from "@/pages/Items/UpdateItem";
import NotFound from "@/pages/notFound/NotFound";
import CreatePurchase from "@/pages/purchase/CreatePurchase";
import Purchase from "@/pages/purchase/Purchase";
import PurchaseLayout from "@/pages/purchase/PurchaseLayout";
import UpdatePurchase from "@/pages/purchase/UpdatePurchase";
import ViewPurchase from "@/pages/purchase/ViewPurchase";
import PurchaseReport from "@/pages/reports/purchaseReport/PurchaseReport";
import ReportLayout from "@/pages/reports/ReportLayout";
import Reports from "@/pages/reports/Reports";
import SellReport from "@/pages/reports/sellReport/SellReport";
import CreateSell from "@/pages/sell/CreateSell";
import Sell from "@/pages/sell/Sell";
import SellLayout from "@/pages/sell/SellLayout";
import UpdateSell from "@/pages/sell/UpdateSell";
import ViewSell from "@/pages/sell/ViewSell";

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
                path:"items",
                Component:ItemList,
                children:[
                    {
                        index:true,
                        Component:Items
                    },
                    {
                        path:"create",
                        Component:CreateItem
                    },
                    {
                        path:":id",
                        Component:UpdateItem
                    },
                ]
            },
            {
                path:"purchase",
                Component:PurchaseLayout,
                children:[
                    {
                        index:true,
                        Component:Purchase
                    },
                    {
                        path:"create",
                        Component:CreatePurchase
                    },
                    {
                        path:":id",
                        Component:UpdatePurchase
                    },
                    {
                        path:"view/:id",
                        Component:ViewPurchase
                    },
                ]
            },
            {
                path:"sell",
                Component:SellLayout,
                children:[
                    {
                        index:true,
                        Component:Sell
                    },
                    {
                        path:"create",
                        Component:CreateSell
                    },
                    {
                        path:":id",
                        Component:UpdateSell
                    },
                    {
                        path:"view/:id",
                        Component:ViewSell
                    },
                ]
            },
            {
                path:"reports",
                Component:ReportLayout,
                children:[
                    {
                        index:true,
                        Component:Reports
                    },
                    {
                        path:"sell",
                        Component:SellReport
                    },
                    {
                        path:'purchase',
                        Component:PurchaseReport
                    },
                ]
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