import type { CategoryProps, CompanyProps, ItemProps, PurchaseProps, purchaseReportProps, saleProps, saleReportProps, stockReportProps } from "./constant";

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
      "_id": "1",
      name: "Phone",
    },
    {
      "_id": "2",
      name: "Tablet",
    },
  ];

  export  const categoryHeaders:string[] = ["Id", "Name", "Action"];

  export const companyHeaders:string[] = ["Id", 'Name', 'Action']

  export const companyData:CompanyProps[] = [
    {
      _id:"1",
      name:"Huawei"
    },
    {
      _id:"2",
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

  export const stockReport : string[] = ["Item Name","Category","Stock","Sold","Purchased","Current Stock",'Action']

  export const stockData:stockReportProps[] = [
    {
      id:1,
      itemName:"I phone 16",
      category:"Phone",
      stock:10,
      sold:5,
      purchase:10,
      currentStock:5
    },
    {
      id:2,
      itemName:"Samsung Galaxy A54",
      category:"Phone",
      stock:10,
      sold:5,
      purchase:10,
      currentStock:5
    }
  ]

  export const saleReport :string [] = ["Item Name","Category","Total Sales","Revenue","Profit",'Action']

  export const saleReportData:saleReportProps[] = [
    {
      id:1,
      itemName:"I Phone 15",
      totalSale:10,
      revenue:80000,
      profit:800,
      category:"Phone"
    },
     {
      id:2,
      itemName:"I Phone 16",
      totalSale:10,
      revenue:80000,
      profit:800,
      category:"Phone"
    }
  ]

  export const purchaseReport :string [] = ["Item Name","Category","Quantity Purchased","Purchase Price","Total Cost",'Action']

  export const purchaseReportData:purchaseReportProps[] = [
    {
      id:1,
      itemName:"I Phone 15",
      quantityPurchase:10,
      purchasePrice:80000,
      totalCost:80000,
      category:"Phone"
    },
     {
      id:2,
      itemName:"I Phone 16",
       quantityPurchase:10,
      purchasePrice:80000,
      totalCost:80000,
      category:"Phone"
    }
  ]