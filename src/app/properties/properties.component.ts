import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




export interface Property {
  ID_Property: string;
  Address: string;
  City: string;
  Suburb: string;
  Type: string;
  Selling_Price: string;
}



@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit, AfterViewInit {
  userpropertiesResponse: any;
  userproperties: Property[] = [];
  displayedColumns: string[] = ['ID_Property', 'Address', 'City', 'Suburb', 'Type', 'Selling_Price'];
  dataSource: MatTableDataSource<Property>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private router: Router) {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
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
    this.getProperties();
  }

  getProperties() {

    var temp: any;

    this.userService.getProperties().subscribe((data: {}) => {
      temp = data;
      this.userpropertiesResponse = temp.response.data;
      var totalLengt = this.userpropertiesResponse.length;
      this.userpropertiesResponse.forEach((element: any, index: number) => {

        this.createConstructedEntries(element.fieldData)
        if (index + 1 == totalLengt) {
          this.dataSource = new MatTableDataSource(this.userproperties);
          console.log(this.userproperties)


          //this.getTotalCost();
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          Swal.close();
        }

      });
    });
  }

  goToProperty(ID_Property: any) {

    localStorage.setItem('ID_Property', ID_Property);

    let route = 'web-app';
    this.router.navigate([route, { outlets: { 'appcontent': ['cet-upload'] } }]);


  }

  createConstructedEntries(element: any) {
    var constructedEntry: Property = {
      ID_Property: element.ID_Property,
      Address: element.Address,
      City: element.City,
      Suburb: element.Suburb,
      Type: element.Type,
      Selling_Price: element.Selling_Price,

    };

    this.userproperties.push(constructedEntry);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     //progress: Math.round(Math.random() * 100).toString(),
//     //fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };


//}
