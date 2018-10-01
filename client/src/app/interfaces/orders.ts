export interface IOrders {
    namePerson : string;
    typePerson : string;
    numberPerson : string;
    state : string;
    totalQuantity : number;
    totalCost : number;
    address : string;
    dateOrder: string;
    timeOrder: string;
    orderDetails: Object;
}

export interface IOrdersDetails {
    idProduct : number;
    quantity : number;
    cost : number;    
}