import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';



interface File {
  media: any;
  type: any;
  size: any;
  name: any;
}

@Component({
  selector: 'app-customedropzone',
  templateUrl: './customedropzone.component.html',
  styleUrls: ['./customedropzone.component.scss']
})
export class CustomedropzoneComponent {
  // files: any[] = [];
  currentFile: any;
  fileLoaded: boolean;
  fileLoader: boolean;
  uploadedFile = {} as File;
  @Output() valueChange = new EventEmitter<any[]>();
  @Input() removeFile: any;
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.valueChange.emit(this.files);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {

    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);



            if (index + 1 === this.files.length) {
              this.valueChange.emit(this.files);
            }



          } else {
            this.files[index].progress += 5;
          }
        }, 100);
      }
    }, 100);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
