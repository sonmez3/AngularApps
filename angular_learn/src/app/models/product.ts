export class Product {
    id:number;  
    name:string;
    type:Type;
    constructor(id:number,name:string,type:Type){
        this.id=id;
        this.name=name;
        this.type=type;
    }

}

export enum Type{
    Big=1,
    middle=2,
    small=3

}
