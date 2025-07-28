import type { CategoryProps, CompanyProps, ItemProps } from "./constant";

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

  export const companyHeaders:string[] = ["Id", 'Name', 'Action']

  export const companyData:CompanyProps[] = [
    {
      id:1,
      name:"Huawei"
    },
    {
      id:2,
      name:"Oppo"
    }
  ]

  export const itemHeaders:string[] = ["Id","Name","Category Name","Company Name","Price","Specs","Color","Stock"]

  export const itemData:ItemProps[] = [
    {
      id:1,
      name:"I Phone 16",
      categoryName:"Phone",
      companyName:"Apple",
      price:1500000,
      specs:"Ram 4, 256 Gb",
      stock:44,
      color:"black"
    },
    {
      id:2,
      name:"I Phone 16",
      categoryName:"Phone",
      companyName:"Apple",
      price:1500000,
      stock:44,
      color:'white'
    }
  ]