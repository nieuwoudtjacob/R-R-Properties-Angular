import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { invoiceService } from 'src/services/invoice.service';
import { keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface Invoice {
  InvoiceID: string;
  Date: string;
  Total_Invoice: string;
  Vat: string;
  Grand_Total: string;
  Credit_Amount: string;
  DebitAmount: string;
  OS_Total: string;
  Man_Payment: string;
  Payment: string;
  Balance_Pay: string;
}
interface Food {
  value: string;
  viewValue: string;
}

export interface dropdownItems {
  Name: string;
}

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})


export class InvoicesComponent implements AfterViewInit, OnInit {
  user: any;
  bearerToken: any;
  userInvoices: Invoice[] = [];
  userInvoicesResponse: any;
  displayedColumns: string[] = ['InvoiceID', 'InvoiceIDS', 'Date', 'Total_Invoice', 'Vat', 'Grand_Total', 'Credit_Amount', 'OS_Total', 'Payment', 'Balance_Pay'];
  dataSource: MatTableDataSource<Invoice>;
  Totalamount = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  foods: Food[] = [
    { value: 'Outstanding', viewValue: 'Outstanding' },
    { value: 'Fully Paid', viewValue: 'Fully Paid' },
    { value: 'All', viewValue: 'All' },
  ];



  constructor(private invoiceService: invoiceService, private router: Router,) {
  }

  ngOnInit(): void {


    Swal.fire({
      title: 'Fetching Data...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.bearerToken = localStorage.getItem('BearerToken');
    this.getInvoiceByCustomerNo();
  }

  getTotalCost() {

    this.userInvoices.forEach(element => {
      this.Totalamount = this.Totalamount + Number(element.Balance_Pay);
    });

  }

  ngAfterViewInit() {
  }


  selectedFilter(selected: any) {
    if (selected = 'Fully Paid') {

    }
    if (selected = 'Outstanding') {

    }
    if (selected = 'All') {

    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getInvoiceByCustomerNo() {

    var temp: any;

    this.invoiceService.getInvoiceByCustomerNo(this.user.Customer_No).subscribe((data: {}) => {
      temp = data;
      this.userInvoicesResponse = temp.response.data;
      var totalLengt = this.userInvoicesResponse.length;
      this.userInvoicesResponse.forEach((element: any, index: number) => {

        this.createContrutedEntries(element.fieldData)
        if (index + 1 == totalLengt) {
          this.dataSource = new MatTableDataSource(this.userInvoices);



          this.getTotalCost();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          Swal.close();
        }

      });
    });
  }




  goToInvoice(InvoiceID: any) {
    let route = '/invoice';
    this.router.navigate([route], { queryParams: { Id: InvoiceID } });
  }


  createContrutedEntries(element: any) {
    var constructedEntry: Invoice = {

      // Balance_Pay: element.Balance_Pay,
      // Credit_Terms: element.Credit_Terms,
      // Customer_Name: element['Customer Name'],
      // CustomerNo: element.CustomerNo,
      // Date: element.Date,
      // Email: element.Email,
      // InvoiceID: element.InvoiceID,
      // Notes: element.Notes,
      // Order_Ref: element.Order_Ref,
      // Registration_NoDos: element.Registration_NoDos,
      // VatNo: element.VatNo


      InvoiceID: element.InvoiceID,
      Date: element.Date,
      Total_Invoice: element.Total_Invoice,
      Vat: element.Vat,
      Grand_Total: element.Grand_Total,
      Credit_Amount: element.Credit_Amount,
      DebitAmount: element.DebitAmount,
      OS_Total: element.OS_Total,
      Man_Payment: element.Man_Payment,
      Payment: element.Payment,
      Balance_Pay: element.Balance_Pay,





    };

    this.userInvoices.push(constructedEntry);
  }
}
