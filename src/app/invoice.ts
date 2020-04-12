export class Invoice {
    constructor(){
         siteId :  Number ;
         siteName :  String;
         blockIds : Number;
         floorIds : String;
         flatIds : Number;
         bookingFormId :  Number ;
         transactionAmount : Number ;
         modiCostDtlsRequests : ModiCostDtlsRequests;
          

    }
}
export class ModiCostDtlsRequests{

    constructor(){
            modificationChargeDesc : String ;
            units : String;
            quantity : Number ;
            rate : Number ; 
            basicAmount : Number;
    }
}