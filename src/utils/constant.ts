

export type HeaderProps = {
    placeholder:string;
    title:string;
    filter?:boolean;
    report?:boolean;
}

export type CategoryProps = {
    _id:string;
    name:string;
}

export type Category = {
    dummyData:CategoryProps[]
}

export type CompanyProps = {
    _id:string;
    name:string;
}

export type Company = {
    dummyData:CompanyProps[]
}

export type ItemProps = {
    id:number;
    name:string;
    categoryName:string;
    companyName:string;
    price:number;
    specs?:string;
    stock:number;
    color:string
}

export type Items = {
    dummyData:ItemProps[]
}

export type PurchaseItems= {
    name:string;
    specs:string;
    color:string;
}

export type PurchaseProps = {
    id:number;
    items:PurchaseItems[]
    quantity:number;
    price:number;
    date:string;
}


export type Purchase = {
    dummyData:PurchaseProps[]
}


export type saleItems= {
    name:string;
    specs:string;
    color:string;
}

export type saleProps = {
    id:number;
    items:saleItems[]
    quantity:number;
    price:number;
    date:string;
}


export type Sale = {
    dummyData:saleProps[]
}

export type stockReportProps = {
    id:number;
    itemName:string;
    category:string;
    stock:number;
    sold:number;
    purchase:number;
    currentStock:number;
}

export type stock = {
    dummyData:stockReportProps[]
}

export type saleReportProps = {
    id:number;
    itemName:string;
    totalSale:number;
    revenue:number;
    profit:number;
    category:string;
}

export type saleReport = {
    dummyData:saleReportProps[]
}


export type purchaseReportProps = {
    id:number;
    itemName:string;
    quantityPurchase:number;
    purchasePrice:number;
    totalCost:number;
    category:string;
}

export type purchaseReport = {
    dummyData:purchaseReportProps[]
}
