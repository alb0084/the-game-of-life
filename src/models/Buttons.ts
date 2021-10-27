
export type Button = { 
    type:string,
    name:string,
    value:string,
    styles?:string,
    setValAction?:(val:any)=>any,
    disable?:boolean,
};



