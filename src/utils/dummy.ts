export const menuItems = [
    {
        title:"Dashboard",
        route:"/dashboard"
    },
    {
        title:"Company",
        route:"/company"
    },
    {
        title:"Category",
        route:'/category'
    },
    {
        title:"Purchase Item",
        route:"/purchase"
    },
    {
        title:"Sell Item",
        route:"/sell"
    },
    {
        title:"Reports",
        route:"/reports",
        children:[
            {
                path:'Report1',
                route:"/report1"
            }
        ]
    },
    {
        title:"Logout",
        route:"/logout"
    }
]