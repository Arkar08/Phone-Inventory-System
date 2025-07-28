import type { CategoryProps, CompanyProps, ItemProps, PurchaseProps, saleProps } from "./constant";

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

  export const purchaseHeaders:string[] = ['Id',"Items","Quantity","Purchase_Price","Date",'Action'];

  export const purchaseBody:PurchaseProps[] = [
    {
      id: 1,
      items:[
        {
          name:"I phone 16",
          specs:"Ram 4, 256 Gb",
          color:"white"
        },
        {
          name:"I phone 15",
          specs:"Ram 4, 256 Gb",
          color:"white"
        }
      ],
      quantity: 10,
      price: 850,
      date:"2025-07-28"
    },
    {
      id: 2,
      items:[
        {
          name:"I phone 16",
          specs:"Ram 4, 256 Gb",
          color:"white"
        }
      ],
      quantity: 10,
      price: 850,
      date:"2025-07-28"
    }
  ]

    export const saleHeaders:string[] = ['Id',"Items","Quantity","Sale_Price","Date",'Action'];

  export const saleData:saleProps[] = [
    {
      id: 1,
      items:[
        {
          name:"I phone 16",
          specs:"Ram 4, 256 Gb",
          color:"white"
        },
        {
          name:"I phone 15",
          specs:"Ram 4, 256 Gb",
          color:"white"
        }
      ],
      quantity: 10,
      price: 850,
      date:"2025-07-28"
    },
    {
      id: 2,
      items:[
        {
          name:"I phone 16",
          specs:"Ram 4, 256 Gb",
          color:"white"
        }
      ],
      quantity: 10,
      price: 850,
      date:"2025-07-28"
    }
  ]