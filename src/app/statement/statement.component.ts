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
  Grand_Total: string;
  Total_Invoice: string;
  Vat: string;

  Credit_Amount: string;
  DebitAmount: string;
  OS_Total: string;
  Man_Payment: string;
  Payment: string;



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
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
  currentDate: any;
  showFiller = false;
  user: any;
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
  displayedColumns: string[] = ['InvoiceID', 'InvoiceIDS', 'Date', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];
  dataSource: MatTableDataSource<Invoice>;
  exactAmount: number;
  printing = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  amountDue = 0;

  ngOnInit(): void {
    this._location.go('web-app');
    var date = new Date();
    this.currentDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()



    this.getInvoiceByCustomerNo();

  }

  constructor(private router: Router, private route: ActivatedRoute, private invoiceService: invoiceService, private userService: UserService, private _location: Location) {
    // this.bearerToken = localStorage.getItem('BearerToken');
    // this.invoiceID = this.route.snapshot.queryParamMap.get('Id');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  goToInvoice(InvoiceID: any) {
    // let route = '/invoice';
    // this.router.navigate([route], { queryParams: { Id: InvoiceID } });
    localStorage.setItem('invoiceId', InvoiceID);

    let route = 'web-app';
    this.router.navigate([route, { outlets: { 'appcontent': ['invoice'] } }]);
  }



  getInvoiceByCustomerNo() {

    var temp: any;

    Swal.fire({
      title: 'Fetching Data...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.invoiceService.getInvoiceByCustomerNo(this.user.Customer_No).subscribe((data: {}) => {
      temp = data;
      this.userInvoicesResponse = temp.response.data;
      var totalLengt = this.userInvoicesResponse.length;
      this.userInvoicesResponse.forEach((element: any, index: number) => {

        this.createContrutedEntries(element.fieldData)
        if (index + 1 == totalLengt) {
          this.dataSource = new MatTableDataSource(this.userInvoices);

          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;

          this.userInvoices.forEach((element) => {

            this.amountDue = this.amountDue + Number(element.Balance_Pay);
          });

          this.exactAmount = this.amountDue;
          this.amountDue = this.amountDue * -1;

          Swal.close();
        }
      });
    });
  }

  createContrutedEntries(element: any) {
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
      Contact_Tel: element.Contact_Tel,


      Total_Invoice: element.Total_Invoice,
      Vat: element.Vat,
      Grand_Total: element.Grand_Total,
      Credit_Amount: element.Credit_Amnt,
      DebitAmount: element.DebitAmount,
      OS_Total: element.OS_Total,
      Man_Payment: element.Man_Payment,
      Payment: element.Payment


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

    this.printing = true;
    this.displayedColumns = ['InvoiceIDS', 'Date', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];

    setTimeout(() => {
      // this.TableHeight = 600;
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

        pdf.save(this.userInvoices[0].Customer_Name + " - " + this.currentDate + " - Statement");


        // pdf.autoPrint();
        //This is a key for printing
        // pdf.output('dataurlnewwindow');
        this.printing = false;
        this.displayedColumns = ['InvoiceID', 'InvoiceIDS', 'Date', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];

        Swal.close();
        // this.TableHeight = 0;
      });
    }, 200);




  }

  public captureScreenPrint() {

    this.printing = true;
    this.displayedColumns = ['InvoiceIDS', 'Date', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];

    setTimeout(() => {
      // this.TableHeight = 600;
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

        //pdf.save(this.invoiceLineItems[0].CustomerNo_Inv + " - " + this.invoiceLineItems[0].Customer_Name_Inv);


        pdf.autoPrint();
        //This is a key for printing
        pdf.output('dataurlnewwindow');
        this.printing = false;
        this.displayedColumns = ['InvoiceID', 'InvoiceIDS', 'Date', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];

        Swal.close();

        // this.TableHeight = 0;
      });
    }, 200);




  }

}