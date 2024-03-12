import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-professionalfees',
  templateUrl: './professionalfees.component.html',
  styleUrls: ['./professionalfees.component.scss']
})
export class ProfessionalfeesComponent {
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

  openPDF1() {
    window.open('../../../assets/Pdfs/fees/Gazetted_Fees_and_Charges_2023_and_2024.pdf', '_blank');
  }
  openPDF2() {
    window.open('../../../assets/Pdfs/fees/ANNOUNCEMENT__GAZETTED_SCHEDULE_OF_FEES_2023.pdf', '_blank');
  }
  openPDF3() {
    window.open('../../../assets/Pdfs/fees/ANNOUNCEMENT__ANNUAL_FEES_v2.pdf', '_blank');
  }
  openPDF4() {
    window.open('../../../assets/Pdfs/fees/2022_SACPVP_Fees_and_Charges_for_Publication.pdf', '_blank');
  }

  ngOnInit(): void {

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
