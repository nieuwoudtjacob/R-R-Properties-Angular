import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-learnership',
  templateUrl: './learnership.component.html',
  styleUrls: ['./learnership.component.scss']
})
export class LearnershipComponent {
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

  openlearnerPDF1() {
    window.open('../../../assets/Pdfs/learnership/Application form for registration and exam (1).docx', '_blank');
  }
  openlearnerPDF2() {
    window.open('../../../assets/Pdfs/learnership/How to Register.docx', '_blank');
  }
  openlearnerPDF3() {
    window.open('../../../assets/Pdfs/learnership/Learnership Program.pdf', '_blank');
  }
  openlearnerPDF4() {
    window.open('../../../assets/Pdfs/learnership/INTERNSHIPS & BUSARIES.docx', '_blank');
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
