import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-cet',
  templateUrl: './cet.component.html',
  styleUrls: ['./cet.component.scss']
})
export class CetComponent {
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

  openCETPDF1() {
    window.open('../../../assets/Pdfs/cet/cet_point_allocation_activit.pdf', '_blank');
  }
  openCETPDF2() {
    window.open('../../../assets/Pdfs/cet/CET_Progress_Report_Form_10A.xls', '_blank');
  }
  openCETPDF3() {
    window.open('../../../assets/Pdfs/cet/uct_ebe_cpd_course_vap202101.pdf', '_blank');
  }

  openCETPDF4() {
    window.open('../../../assets/Pdfs/cet/uct_ebe_cpd_course_vhlp20210.pdf', '_blank');
  }

  openCETPDF5() {
    window.open('../../../assets/Pdfs/cet/uct_ebe_cpd_pmv202103.pdf', '_blank');
  }

  openCETPDF6() {
    window.open('../../../assets/Pdfs/cet/uct_ebe_cpd_vlrejhb202105.pdf', '_blank');
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
