import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { ConstructionDialogComponent } from '../construction-main/construction-dialog/construction-dialog.component';
import { MatDialog } from '@angular/material/dialog';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
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

  openPDF() {
    window.open('../../../assets/announcments/ANNOUNCEMENT_11 Dec 2023.pdf', '_blank');
  }
  openPDF2() {
    window.open('../../../assets/announcments/Announcement_ Board Exam_March 2024.pdf', '_blank');
  }
  openPDFExam() {
    window.open('../../../assets/announcments/Pre-Exam Programme13March2024.pdf', '_blank');

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
