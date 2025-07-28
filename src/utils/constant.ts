

export type HeaderProps = {
    placeholder:string;
    title:string;
    filter?:boolean;
    report?:boolean;
}

export type CategoryProps = {
    id:number;
    name:string;
}

export type Category = {
    dummyData:CategoryProps[]
}

export type CompanyProps = {
    id:number;
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

