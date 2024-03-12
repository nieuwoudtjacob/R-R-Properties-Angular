import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imageLoader = true;
  imageLoader1 = true;
  imageLoader2 = true;
  imageLoader3 = true;
  imageLoader4 = true;
  imageLoader5 = true;
  imageLoader6 = true;
  imageLoader7 = true;
  imageLoader8 = true;
  imageLoader9 = true;
  imageLoader10 = true;
  imageLoader11 = true;
  imageLoader12 = true;
  imageLoader13 = true;
  imageLoader14 = true;
  imageLoader15 = true;
  imageLoader16 = true;
  imageLoader17 = true;
  imageLoader18 = true;
  imageLoader19 = true;
  imageLoader20 = true;
  imageLoader21 = true;
  imageLoader22 = true;
  imageLoader23 = true;
  imageLoader24 = true;
  imageLoader25 = true;
  imageLoader26 = true;
  imageLoader27 = true;
  imageLoader28 = true;
  imageLoader29 = true;
  imageLoader30 = true;
  imageLoader31 = true;
  folder2016Practical = false;
  construction = false;
  top = false;
  bottomscrollarrow = false;
  folder2019Practical = false;
  folder2016Conference = false;
  name = "Angular ";
  settings = {
    counter: false,
    plugins: [lgZoom]

  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


  folder2016Click() {
    if (this.folder2016Practical == false) {
      this.folder2016Practical = true;
    } else {
      this.folder2016Practical = false;
    }
  }

  folder2016Click2() {
    if (this.folder2016Conference == false) {
      this.folder2016Conference = true;
    } else {
      this.folder2016Conference = false;
    }
  }

  folder2019Click3() {
    if (this.folder2019Practical == false) {
      this.folder2019Practical = true;
    } else {
      this.folder2019Practical = false;
    }
  }

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


