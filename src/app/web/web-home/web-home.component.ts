import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { ConstructionDialogComponent } from '../construction-main/construction-dialog/construction-dialog.component';
import { MatDialog } from '@angular/material/dialog';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent implements OnInit {
  construction = false;
  top = true;
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

    //this.openDialog();
    // let route = 'web-home';
    // this.router.navigate([route, { outlets: { 'webcontent': ['home-content'] } }]);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ConstructionDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {

    });

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

      this.top = true;
    }
  }


  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;

    if (window.scrollY != 0) {
      this.top = false;
      this.bottomscrollarrow = true;
    } else {
      this.top = true;
      this.bottomscrollarrow = false;
    }


  }

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
