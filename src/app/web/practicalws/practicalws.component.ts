import { Component, HostListener } from '@angular/core';
import { ConstructionDialogComponent } from '../construction-main/construction-dialog/construction-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-practicalws',
  templateUrl: './practicalws.component.html',
  styleUrls: ['./practicalws.component.scss']
})
export class PracticalwsComponent {
  construction = false;
  top = false;
  bottomscrollarrow = false;

  config: SwiperOptions = {
    //slidesPerView: 3,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      // el: '.swiper-pagination',
      type: 'bullets',
      clickable: true

    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  }
  ishome: boolean;

  constructor(private router: Router, public dialog: MatDialog) {

  }


  ngOnInit(): void {

  }
  openInformationPDF() {
    window.open('../../../assets/Pdfs/practicalws/2023_practical_workschool_no.pdf', '_blank');
  }
  openApplicationPDF() {
    window.open('../../../assets/Pdfs/practicalws/practical_workschool_reg_for.pdf', '_blank');
  }
  openProgrammePDF() {
    window.open('../../../assets/Pdfs/practicalws/workschool_programme_august_.pdf', '_blank');
  }

  onSwiper([swiper]) {

  }
  onSlideChange() {

  }

  goToContruction(iscontruction: boolean) {
    if (iscontruction == true) {

      this.construction = true;
      this.top = false;

    } else {
      this.construction = false;
      let route = '';
      this.router.navigate([route]);
      this.top = false;
    }
  }

  scrolled: boolean = false;

  toApp() {
    let route = 'client-login';
    this.router.navigate([route]);
  }


  arrowClick() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }
}
