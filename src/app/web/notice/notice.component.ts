import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper';

export interface Courses {
  category: string;
  position: string;
  noOfDays: string;
  cetpoints: string;
  amount: string;
}

export interface bank {
  bank: string;
  accountNo: string;
  type: string;
  branch: string;
}

const ELEMENT_DATA: Courses[] = [
  { position: '1', category: 'Candidate and Pr Aval: attendance at the work school is a compulsory requirement to sit for the Board Examination', noOfDays: '5', cetpoints: '0', amount: 'R7 550' },
  { position: '2', category: 'CET or Refresher: must have attended the Work school previously ', noOfDays: '', cetpoints: '', amount: '' },
  { position: '2.a', category: 'Attendance', noOfDays: '1', cetpoints: '7', amount: 'R1 800' },
  { position: '2.b', category: 'Attendance ', noOfDays: '2', cetpoints: '14', amount: 'R3 600' },
  { position: '2.c', category: 'Attendance ', noOfDays: '3', cetpoints: '21', amount: 'R5 400' },
  { position: '3', category: 'Candidate Single Residential Property Assessor', noOfDays: '3', cetpoints: '0', amount: 'R4 000' },
  { position: '4', category: 'Non-Registered Person: daily rate', noOfDays: '1', cetpoints: '0', amount: 'R2 137' },
  { position: '5', category: 'Non-Registered Person: no group assignment to be submitted', noOfDays: '4', cetpoints: '0', amount: 'R8 550' },


];

const ELEMENT_DATA1: bank[] = [
  { bank: 'ABSA', accountNo: '214 0285 741', type: 'Current Account', branch: 'Menlyn - 632005' },



];

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent {

  displayedColumns: string[] = ['position', 'category', 'noOfDays', 'cetpoints', 'amount'];
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

  openPDFWorkschool() {
    window.open('../../../assets/Pdfs/notice/notice_practical_work_school.pdf', '_blank');
  }
  openPDFWorkschool2() {
    window.open('../../../assets/Pdfs/notice/sacpvp_practical_workschool_.pdf', '_blank');
  }
  openvenue1() {
    window.open('../../../assets/Pdfs/notice/uct-ebe-cpd-vlrejhb2023.pdf', '_blank');
  }
  openvenue2() {
    window.open('../../../assets/Pdfs/notice/pre-exam_programme_01__02__m.pdf', '_blank');
  }
  openStaffPDF() {
    window.open('../../../assets/Pdfs/notice/pre-exam_programme_01__02__m.pdf', '_blank');
  }
  openEthicsPDF() {
    window.open('../../../assets/Pdfs/notice/2021-0125_ghrec_ethics_appro.pdf', '_blank');
  }
  openSupportPDF() {
    window.open('../../../assets/Pdfs/notice/letter_of_support__lt_mamabo.pdf', '_blank');
  }
  openParticipationPDF() {
    window.open('../../../assets/Pdfs/notice/cover_letter_to_participants.pdf', '_blank');
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
