interface Item{
label:string;
routerLink:string[],
icon:string
}
export interface IMenu{
    label:string;
    separator?:boolean;
    items:Item[]
}
