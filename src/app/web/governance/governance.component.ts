import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-governance',
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.scss']
})
export class GovernanceComponent {
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
    window.open('../../../assets/governance/Broken.pdf', '_blank');
  }

  openPDF2() {
    window.open('../../../assets/governance/Rules_for_the_PVP,2020.pdf', '_blank');
  }

  openPDF3() {
    window.open('../../../assets/governance/Regulations_ito_Disaster_Management_Act_.pdf', '_blank');
  }

  openPDF4() {
    window.open('../../../assets/governance/Rules_for_the_PVP2020.pdf', '_blank');
  }

  openPDF5() {
    window.open('../../../assets/governance/Nomination_Form_3_1_a_2022-2026.docx', '_blank');
  }

  openPDF6() {
    window.open('../../../assets/governance/Nomination_Form_3_1_b_2022-2026.docx', '_blank');
  }

  openPDF7() {
    window.open('../../../assets/governance/Nomination_Form_3_1_c_2022-2026.docx', '_blank');
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
