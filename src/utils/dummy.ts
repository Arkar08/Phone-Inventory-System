import type { CategoryProps } from "./constant";

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
        title:"Items",
        route:"/items"
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

  export const dummyData:CategoryProps[] = [
    {
      id: 1,
      name: "Phone",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
    {
      id: 2,
      name: "Tablet",
    },
  ];

  export  const categoryHeaders:string[] = ["Id", "Name", "Action"];