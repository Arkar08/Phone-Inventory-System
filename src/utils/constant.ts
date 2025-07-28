
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