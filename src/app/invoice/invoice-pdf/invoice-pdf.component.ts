import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { invoiceService } from 'src/services/invoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { UserService } from 'src/services/user.service';
import { Location } from '@angular/common';




export interface Invoice {
  Balance_Pay: string;
  Credit_Terms: string;
  Customer_Name: string;
  CustomerNo: string;
  Date: string;
  Email: string;
  InvoiceID: string;
  Notes: string;
  Order_Ref: string;
  Registration_NoDos: string;
  VatNo: string;
  Address1: string;
  Address2: string;
  Address3: string;
  Address4: string;
  Address5: string;
  Contact_Tel: string;
}

export interface InvoiceLineItems {
  Banking_Details: string;
  CustomerNo_Inv: string;
  Customer_Name_Inv: string;
  Discount: string;
  Grand_Total: string;
  Grand_Total_Summary: string;
  InvoiceID: string;
  Prod_Description: string;
  Prod_Price: string;
  Prod_Qnty: string;
  Prod_Ref: string;
  Prod_Total: string;
  Registration_NoDos: string;
  Total_Summary: string;
  Vat: string;
  Vat_Summary: string;

}

@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.scss']
})

export class InvoicePDFComponent implements OnInit {
  TableHeight = 380;
  amountExVat = 0.00;
  totalVat = 0.00;
  totalDiscount = 0.00;
  userInvoices: Invoice[] = [];
  invoiceID: any;
  invoicesLineItemsResponse: any;
  userInvoicesResponse: any;
  invoiceLineItems: InvoiceLineItems[] = [];
  blob: any;
  displayedColumns: string[] = ['Prod_Ref', 'Prod_Description', 'Prod_Qnty', 'Prod_Price', 'Prod_Total', 'Vat', 'Grand_Total'];
  dataSource: MatTableDataSource<InvoiceLineItems>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  ngOnInit(): void {

    this._location.go('web-app');





    this.getInvoice();
    //this.getInvoiceLineItems();

  }

  constructor(private router: Router, private route: ActivatedRoute, private invoiceService: invoiceService, private userService: UserService, private _location: Location) {
    this.invoiceID = localStorage.getItem('invoiceId');
  }


  getInvoice() {
    Swal.fire({
      title: 'Fetching Data...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });


    var temp: any;

    this.invoiceService.getInvoiceByInvoiceID(this.invoiceID).subscribe((data: {}) => {
      temp = data;

      this.getInvoiceLineItems();
      this.userInvoicesResponse = temp.response.data;
      var totalLengt = this.userInvoicesResponse.length;
      this.userInvoicesResponse.forEach((element: any, index: number) => {

        this.createContrutedEntriesInvoice(element.fieldData)
        if (index + 1 == totalLengt) {

        }
      });
    });
  }

  backToStatement() {
    let route = 'web-app';
    this.router.navigate([route, { outlets: { 'appcontent': ['statement'] } }]);
  }
  getInvoiceLineItems() {

    var temp: any;
    this.invoiceService.getInvoiceLineItemsByInvoiceID(this.invoiceID).subscribe((data: {}) => {
      temp = data;

      this.invoicesLineItemsResponse = temp.response.data;
      var totalLengt = this.invoicesLineItemsResponse.length;
      this.invoicesLineItemsResponse.forEach((element: any, index: number) => {

        this.createContrutedEntries(element.fieldData)
        if (index + 1 == totalLengt) {

          this.dataSource = new MatTableDataSource(this.invoiceLineItems);

          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.invoiceLineItems.forEach(element => {
            this.amountExVat = this.amountExVat + Number(element.Prod_Price);
          });


          this.invoiceLineItems.forEach(element => {
            this.totalVat = this.totalVat + Number(element.Vat);
          });
          this.invoiceLineItems.forEach(element => {
            this.totalDiscount = this.totalDiscount + Number(element.Discount);
          });
          Swal.close();
        }
      });
    });
  }



  createContrutedEntries(element: any) {
    var constructedEntry: InvoiceLineItems = {

      Banking_Details: element.Banking_Details,
      CustomerNo_Inv: element.CustomerNo_Inv,
      Customer_Name_Inv: element.Customer_Name_Inv,
      Discount: element.Discount,
      Grand_Total: element['Grand Total'],
      Grand_Total_Summary: element['Grand Total Summary'],
      InvoiceID: element.InvoiceID,
      Prod_Description: element.Prod_Description,
      Prod_Price: element.Prod_Price,
      Prod_Qnty: element.Prod_Qnty,
      Prod_Ref: element.Prod_Ref,
      Prod_Total: element.Prod_Total,
      Registration_NoDos: element.Registration_NoDos,
      Total_Summary: element['Total Summary'],
      Vat: element.Vat,
      Vat_Summary: element['Vat Summary'],



    };

    this.invoiceLineItems.push(constructedEntry);
  }


  createContrutedEntriesInvoice(element: any) {
    var constructedEntry: Invoice = {

      Balance_Pay: element.Balance_Pay,
      Credit_Terms: element.Credit_Terms,
      Customer_Name: element['Customer Name'],
      CustomerNo: element.CustomerNo,
      Date: element.Date,
      Email: element.Email,
      InvoiceID: element.InvoiceID,
      Notes: element.Notes,
      Order_Ref: element.Order_Ref,
      Registration_NoDos: element.Registration_NoDos,
      VatNo: element.VatNo,
      Address1: element.Address1,
      Address2: element.Address2,
      Address3: element.Address3,
      Address4: element.Address4,
      Address5: element.Address5,
      Contact_Tel: element.Contact_Tel
    };

    this.userInvoices.push(constructedEntry);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public captureScreen() {
    Swal.fire({
      title: 'Compiling PDF...',
      html: 'Please wait download will start automatically...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    var data = document.getElementById('contentToConvert') as HTMLElement;
    html2canvas(data, { useCORS: true, scale: 3 }).then((canvas) => {


      var imgWidth = 200; //520
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let pdf = new jspdf('p', 'mm', 'a4', true);
      var position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

      this.blob = pdf.output("blob");

      pdf.save(this.invoiceLineItems[0].CustomerNo_Inv + " - " + this.invoiceLineItems[0].Customer_Name_Inv);

      Swal.close();

    });


  }

  public captureScreenPrint() {

    Swal.fire({
      title: 'Compiling PDF...',
      html: 'Please wait download will start automatically...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    var data = document.getElementById('contentToConvert') as HTMLElement;
    html2canvas(data, { useCORS: true, scale: 3 }).then((canvas) => {


      var imgWidth = 200; //520
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');

      let pdf = new jspdf('p', 'mm', 'a4', true);
      var position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

      this.blob = pdf.output("blob");


      pdf.autoPrint();
      //This is a key for printing
      pdf.output('dataurlnewwindow');


      Swal.close();

    });


  }

}