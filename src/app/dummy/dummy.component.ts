import { Component, OnInit } from '@angular/core';
import{ InvoiceService } from '../invoice.service';
import { Invoice } from '../invoice';
import {FormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})

  export class DummyComponent implements OnInit {
    colors =['blue','yellow','green','red'];
    num =[5,7,3,8,9,6];
    siteData : any;
    blockData : any;
    flateData : any;
    floorData : any;
    gstData : any;

    //invoiceForm= new Invoice();

    public Invoice : any[] = [{
       siteId :  '' ,
         siteName :  '',
         blockIds : '',
         floorIds : '',
         flatIds : '',
         bookingFormId :  '' ,
         transactionAmount : '' ,
         modiCostDtlsRequests : ''
    }];
    //constructor(private fb:FormBuilder){}
    constructor(private invoiceservice:InvoiceService ,private fb:FormBuilder) {
      }
    invoice : Invoice=new Invoice();
    submitted = false;
  
    ngOnInit() {
      this.submitted=false;
     
            
      //this.invoiceservice.getSites().subscribe((Sdata)=>this.siteData=Sdata);
      this.invoiceservice.getSites().subscribe((Sdata)=>console.log(this.siteData=Sdata));
      

      //this.invoiceservice.getBlocks().subscribe((Bdata)=>this.blockData=Bdata);
      this.invoiceservice.getBlocks().subscribe((Bdata)=>console.log(this.blockData=Bdata));
     
      //this.invoiceservice.getFloors().subscribe((FLdata)=>this.floorData=FLdata);
      this.invoiceservice.getFloors().subscribe((FLdata)=>console.log(this.floorData=FLdata));
      
      //this.invoiceservice.getFlats().subscribe((Fdata)=>this.flateData=Fdata);
      this.invoiceservice.getFlats().subscribe((Fdata)=>console.log(this.flateData=Fdata));
   
      

    //this.invoiceservice.getGst().subscribe((Gdata)=>this.gstData=Gdata);
    this.invoiceservice.getGst().subscribe((Gdata)=>console.log(this.gstData=Gdata));

  }
  

  invoiceForm =this.fb.group({
    sessionKey:['B79A1B75B41E9E4ABDFCB0DD37C5A06C8ADC312464F4A3EEB9AF2683EB993239'],
    siteId:[''],
    siteName:[''],
    blockIds :[''],
    floorIds :[''],
    flatIds :[''],
    bookingFormId:[''],
    transactionAmount :[''],
    modiCostDtlsRequests :this.fb.array([
      this.addForm()
      //this.addInvoiceForm()
    ])


  });

  // invoiceForm=new FormGroup({
  //   siteId:new FormControl(''),
  //   siteName :new FormControl(''),
  //        blockIds :new FormControl(''),
  //        floorIds :new FormControl(''),
  //        flatIds :new FormControl(''),
  //        bookingFormId:new FormControl(''),
  //        transactionAmount :new FormControl(''),
  //        modiCostDtlsRequests :new FormGroup({
  //           sno_:new FormControl(''),
  //           modificationChargeDesc :new FormControl(''),
  //           units:new FormControl(''),
  //           quantity :new FormControl(''),
  //           rate :new FormControl(''),
  //           basicAmount :new FormControl('')

  //         })


  // } );
    addForm(): FormGroup{
      return this.fb.group({
        sno_:[''],
        modificationChargeDesc :[''],
        units:[''],
        quantity :[''],
        rate :[''],
        basicAmount :['']
  
      });
    }
    //ticket = { "rate": 0, "quantity": 0};
   
    calculateBA(): any {
     // return this.invoiceForm.quantity * this.invoiceForm.rate;
 }
  
    addInvoiceForm() {
     // if(this.addAddress.length!=0){
      this.Invoice.push({
        sno_: '',
        modificationChargeDesc: '',
        units: '',
        quantity: '',
        rate:'',
        basicAmount:''

      });
   // }
    }
  
    removeInvoiceForm(i: number) {
     // console.log(Number.length);
        
     if(this.Invoice.length<=1){
       alert("Can't Remove");        }
        if(this.Invoice.length>1){
          this.Invoice.splice(i, 1);
        }
           
    }
  
    logValue() {
      console.log(this.Invoice);
    }

    onSubmit(){
     console.log(this.invoiceForm.value);
     this.invoiceservice.createInvoice(this.invoiceForm.value).subscribe(
       response => console.log("success",response),
      error=>console.error("Error",error)
       
       );
    }
  }