import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { documentService } from 'src/services/document.service';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { File } from 'angular-feather/icons';



interface Property {
  Address: string;
  Category_1: string;
  City: string;
  Commission_Incl_Vat: number;
  Commission_On_Deal: number;
  Commission_Perc_N_On_Deal: number;
  Commission_Perc_On_Deal: number;
  Commission_Vat: number;
  Date_Comission_Payment: string;
  Date_Of_Sale: string;
  Date_Of_Transfer: string;
  ID_Property: string;
  Mandate_Listing_Perc: number;
  Mandate_Other_Perc: string;
  Mandate_Selling_Perc: number;
  Selling_Price: number;
  Suburb: string;
  Sum_Agent_Total: string;
  Sum_Company_Total: string;
  Total_Amount_To_Agents: number;
  Total_Amount_To_Company: number;
  Total_Listing_Agents: string;
  Total_Selling_Agents: string;
  Type: string;
  id_Agent: string;
}



interface File {
  media: any;
  type: any;
  size: any;
  name: any;
}

export interface document {

  type: string;
  File: string;
  Filename: string;
  ID_Gallery: string;
  id_Property: string;
}


@Component({
  selector: 'app-cet-upload',
  templateUrl: './cet-upload.component.html',
  styleUrls: ['./cet-upload.component.scss']
})
export class CetUploadComponent {



  fileToUpload: any;
  user: any;
  documentRecordCreateResponse: any;
  documentRecordCreateResponseId: any;
  userDocuments: document[] = [];
  fileRemove: boolean;
  uploadedFileList: any;
  hideuploadbutton: boolean;
  userDocumentsTemp: any;
  selectedCategory: any;
  urlList: any;
  selectedViewCategory: any;
  buttondisble: boolean;
  isOpenFiles: boolean;
  isImage: boolean;
  isPdf: boolean;
  filecontainer: string;
  propertyID: any;
  property: Property;

  constructor(private documentService: documentService, private userService: UserService, private readonly _fb: FormBuilder, private router: Router, private _location: Location) {

  }

  ngOnInit(): void {
    this.isOpenFiles = false;
    this.buttondisble = false;
    this._location.go('web-app');
    this.selectedCategory = 'option1';
    this.selectedViewCategory = 'All';
    this.hideuploadbutton = true;
    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    this.propertyID = localStorage.getItem('ID_Property');
    console.log(this.propertyID)

    if (this.propertyID != undefined) {

      this.userService.getPropertyByID(this.propertyID).subscribe((data: {}) => {

        console.log(data);
        var temp: any;
        temp = data;
        this.property = temp.response.data[0].fieldData;

        console.log(this.property)


      });


    }

  }

  // document = {
  //   url: 'https://154.0.168.55/Streaming/MainDB/C847534AC2C15A73C058F39D6B1DC7F2D2D4E35BDAA9FF3239CB9D337A37D93E.pdf?RCType=EmbeddedRCFileProcessor',
  //   withCredentials: true,

  // }

  goToLink(url: any) {

    // let splitarray: string[] = url.split("https://154.0.168.55");
    // let newUrl = "https://sacpvp.online" + splitarray[1];
    // window.open(url, "_blank");

    // let blob = fetch(url).then(r => r.blob());
    // console.log(blob)


    // // if(window.FileReader) {
    // //   var reader = new FileReader();
    // //   reader.readAsDataURL(dada); 
    // //   reader.onloadend = () => {
    // //       var base64data = reader.result;                
    // //       console.log(base64data);
    // //   }
    // // }
    // console.log(url)
    // var re = /pdf/gi;
    // var str = url;
    // if (str.search(re) == -1) {
    //   console.log("Does not contain pdf");
    //   this.isPdf = false;
    //   this.isImage = true;
    // } else {
    //   console.log("Contains ");
    //   this.isPdf = true;
    //   this.isImage = false;
    // }



    // console.log(url)
    // this.filecontainer = url;
    // this.isOpenFiles = true;
    // var filebase64;
    // this.toDataURL(url, function (dataUrl) {

    //   filebase64 = dataUrl
    //   console.log(filebase64)
    // })
    // setTimeout(() => {
    //   this.filecontainer = filebase64;
    //   this.isOpenFiles = true;
    //   console.log(this.filecontainer)
    // }, 1600);
    window.open(url, '_blank');
  }
  closedoc() {
    this.isOpenFiles = false;
  }

  back() {

    let route = 'web-app';
    this.router.navigate([route, { outlets: { 'appcontent': ['properties'] } }]);

  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  viewChange() {

    this.userDocumentsTemp = undefined;
    this.userDocuments = [];

    if (this.selectedViewCategory !== "All") {
      Swal.fire({
        title: 'Fetching Data...',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });

      this.documentService.getDocumentsByUserCategory(this.user.Customer_No, this.selectedViewCategory).subscribe((data: {}) => {

        var temp: any;
        temp = data;
        this.userDocumentsTemp = temp.response.data;
        this.userDocumentsTemp.forEach((element: any, index: number) => {
          this.createContrutedEntriesDocuments(element.fieldData, element.recordId)
          Swal.close();
        });
      });
    } else {
      this.getPropertyDocumentsByPropertyID();
    }
  }

  getPropertyDocumentsByPropertyID() {

    Swal.fire({
      title: 'Fetching Data...',
      html: 'Please wait...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    this.userDocumentsTemp = undefined;
    this.userDocuments = [];

    this.userService.getPropertyDocumentsByPropertyID(this.propertyID).subscribe((data: {}) => {

      var temp: any;
      temp = data;
      console.log(data)
      this.userDocumentsTemp = temp.response.data;
      this.userDocumentsTemp.forEach((element: any, index: number) => {
        this.createContrutedEntriesDocuments(element.fieldData, element.recordId)
        Swal.close();
      });
    });
  }


  createContrutedEntriesDocuments(element: any, recordId: any) {

    var name = element.Filename;
    var resultpdf = name.includes('pdf');
    var type;

    if (resultpdf) {
      type = 'pdf'
    } else {
      type = 'notpdf'
    }


    var constructedEntry: document = {


      type: type,
      File: element.File,
      Filename: element.Filename,
      ID_Gallery: element.ID_Gallery,
      id_Property: element.id_Property

    };
    this.userDocuments.push(constructedEntry);
  }

  onUploadSuccess(files: any) {
    this.uploadedFileList = files;

    this.urlList = null;
    this.hideuploadbutton = true;

    const arr = [];
    this.uploadedFileList.forEach(element => {

      var reader = new FileReader();

      reader.readAsDataURL(element); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed

        var fileurl = {} as File;

        fileurl.type = element.type;
        fileurl.name = element.name;
        fileurl.size = element.size;
        fileurl.media = event.target.result;

        arr.push(fileurl);
        this.hideuploadbutton = false;

      }

      if (files[0]) {
        this.urlList = arr;
      } else {
        this.urlList = '';
      }

    });
  }

  submitDocs() {
    this.buttondisble = true;
    this.uploadedFileList.forEach((element, index) => {
      const formData = new FormData();
      formData.append('upload', element);


      this.userService.getBearerTokenDocumentsDB().subscribe((data: {}) => {
        var data1: any = data
        console.log(data)
        var token = data1.invoiceBearer;

        this.documentService.postDocumentJson(token, this.propertyID, element.name).subscribe((data: {}) => {
          this.documentRecordCreateResponse = data;
          this.documentRecordCreateResponseId = this.documentRecordCreateResponse.response.recordId





          this.documentService.postDocument(token, formData, this.documentRecordCreateResponseId).subscribe((data: {}) => {

            ///binne response
            if (index + 1 === this.uploadedFileList.length) {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })

              Toast.fire({
                icon: 'success',
                title: 'Uploaded successfully'
              })
              // let route = 'web-app';
              // // this.router.navigate([route, { outlets: { 'appcontent': ['cet-upload'] } }]);
              window.location.href = 'https://localhost:4200/web-app';

              // this.router.navigateByUrl('web-app', { skipLocationChange: true }).then(() => {
              //   this.router.navigate([route, { outlets: { 'appcontent': ['cet-upload'] } }]);
              // });
              // window.location.reload();
            }
          });


        });

      });
    });
  }


  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    console.log(tabChangeEvent.index)

    if (tabChangeEvent.index === 2) {
      if (this.user !== undefined) {
        this.getPropertyDocumentsByPropertyID();
      }
    }
  }

}