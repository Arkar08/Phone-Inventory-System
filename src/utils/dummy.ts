
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

  export  const categoryHeaders:string[] = ["Id", "Name","CreatedAt", "Action"];

  export const companyHeaders:string[] = ["Id", 'Name',"CreatedAt", 'Action']

  export const itemHeaders:string[] = ["Id","Name","Category","Company","Specs","Color","Stock","Price","CreatedAt","Action"]

  export const purchaseHeaders:string[] = ['Id',"Items","Quantity","Purchase Price","Purchase Date",'Action'];

  export const saleHeaders:string[] = ['Id',"Items","Quantity","Sale Price","Sale Date",'Action'];

  export const stockReport : string[] = ["Item Name","Category","Stock","Sold","Purchased","Current Stock"]

  export const saleReport :string [] = ["Item Name","Total Sales","Revenue","Profit",'Action']

  export const purchaseReport :string [] = ["Item Name","Quantity Purchased","Purchase Price","Total Cost",'Action']
