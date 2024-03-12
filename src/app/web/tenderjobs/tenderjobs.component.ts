import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

export interface Tender {
  bidNo: string;
  bidDesc: string;
  fee: string;
  point: string;
  openDate: string;
  briefDate: string;
  closeDate: string;
}

const ELEMENT_DATA: Tender[] = [
  {
    bidNo: '8/2/1/UHM 1244/22/23',
    bidDesc: 'Bid to preform the functions of a municipal valuer for preparation of the general valuation roll and maintenance & updating of valuation rolls for the period of five years in the city of uMhlathuze, for general valuation roll to be implemented on 1 July 2025',
    fee: 'R652.00 (VAT Inclusive)',
    point: 'Price = 80 Equity = 20',
    openDate: '14 June 2023',
    briefDate: 'Date: 21 June 2023 Time: 10h00 Venue: Senior Manager’s Conference Room D319 ',
    closeDate: '24 July 2023 at 12h00',
  },



];


@Component({
  selector: 'app-tenderjobs',
  templateUrl: './tenderjobs.component.html',
  styleUrls: ['./tenderjobs.component.scss']
})
export class TenderjobsComponent {

  displayedColumns: string[] = ['bidNo', 'bidDesc', 'fee', 'point', 'openDate', 'briefDate', 'closeDate'];
  dataSource = ELEMENT_DATA;


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

  openABSAWordDoc() {

    window.open('../../../assets/Pdfs/tenders/absa_rfp_advert_response_fo.docx', '_blank');
  }
  openChairPersonPDF() {

    window.open('../../../assets/Pdfs/tenders/chairperson_appointment_of_a.pdf', '_blank');
  }
  openProsecutorPDF() {

    window.open('../../../assets/Pdfs/tenders/Appointment of a Disciplinary Tribunal Pro Forma Prosecutor.pdf', '_blank');
  }
  openRegistrarPDF() {

    window.open('../../../assets/Pdfs/tenders/registrar_post_readvertiseme.pdf', '_blank');
  }
  openGovernmentTenderPDF() {

    window.open('../../../assets/Pdfs/tenders/4th_cycle_gv_advert_-_tender.pdf', '_blank');
  }
  openAttourneyPDF() {
    window.open('../../../assets/Pdfs/tenders/Appointment of a Disciplinary Tribunal Chairperson.pdf', '_blank');
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
