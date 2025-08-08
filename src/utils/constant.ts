

export type HeaderProps = {
    placeholder?:string;
    title:string;
    filter?:boolean;
    report?:boolean;
    plusClick?:() =>void;
}

export type CategoryProps = {
    _id:string;
    name:string;
    createdAt:string;
}

export type Category = {
    dummyData:CategoryProps[]
}

export type CompanyProps = {
    _id:string;
    name:string;
    createdAt:string;
}

export type Company = {
    dummyData:CompanyProps[]
}

export type ItemProps = {
    _id:string;
    itemName:string;
    category:string;
    company:string;
    price:number;
    option?:string;
    stock:number;
    color:string
    createdAt:string;
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
    _id:string;
    item:string;
    quantity:number;
    purchasePrice:number;
    purchaseDate:string;
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
    _id:string;
    item:string;
    quantity:number;
    sellPrice:number;
    sellDate:string;
}


export type Sale = {
    dummyData:saleProps[]
}

export type stockReportProps = {
    _id:string;
    itemName:string;
    color?:string;
    option?:string;
    category:string;
    stock:number;
    sold:number;
    purchased:number;
    currentStock:number;
}

export type stock = {
    dummyData:stockReportProps[]
}

export type saleReportProps = {
    _id:string;
    color?:string;
    option?:string;
    itemName:string;
    sold:number;
    revenue:number;
    profit:number;
}

export type saleReport = {
    dummyData:saleReportProps[]
}


export type purchaseReportProps = {
    _id:string;
    color?:string;
    option?:string;
    itemName:string;
    purchaseQuantity:number;
    purchasePrice:number;
    totalCost:number;
}

export type purchaseReport = {
    dummyData:purchaseReportProps[]
}


export type CreateHeaderProps = {
    title:string;
}

export type InputProps = {
    title:string;
    placeholder:string;
    option?:boolean;
    type?:string;
}

export type ButtonProps = {
    color:string;
    text:string;
    click?:() =>void;
}

export type optionProps = {
    name:string;
    _id:string;
}

export type SelectProps = {
    title:string;
    placeholder:string;
    optionData:optionProps[]
    isLoading?:boolean;
    option?:boolean
}