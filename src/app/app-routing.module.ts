import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "src/app/login/login.component"

import { InvoicesComponent } from "src/app/invoices/invoices.component"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InvoicePDFComponent } from "src/app/invoice/invoice-pdf/invoice-pdf.component"

import { StatementComponent } from 'src/app/statement/statement.component'
import { CetUploadComponent } from 'src/app/cet-upload/cet-upload.component'
import { WebHomeComponent } from 'src/app/web/web-home/web-home.component'
import { WebHomeContentComponent } from 'src/app/web/web-home-content/web-home-content.component'
import { ConstructionPageComponent } from 'src/app/web/construction-page/construction-page.component'
import { NavbarsComponent } from './shared/navbars/navbars.component';
import { AnnouncementsComponent } from './web/announcements/announcements.component';
import { GalleryComponent } from './web/gallery/gallery.component';
import { ExaminationsComponent } from './web/examinations/examinations.component';
import { EventsComponent } from './web/events/events.component';
import { NoticeComponent } from './web/notice/notice.component';
import { PracticalwsComponent } from './web/practicalws/practicalws.component';
import { TenderjobsComponent } from './web/tenderjobs/tenderjobs.component';
import { RegistrationsComponent } from './web/registrations/registrations.component';
import { HowtoregisterComponent } from './web/howtoregister/howtoregister.component';
import { AccreditedprogrammesComponent } from './web/accreditedprogrammes/accreditedprogrammes.component';
import { ElogComponent } from './web/elog/elog.component';
import { CetComponent } from './web/cet/cet.component';
import { RestrictioncodesComponent } from './web/restrictioncodes/restrictioncodes.component';
import { LearnershipComponent } from './web/learnership/learnership.component';
import { ProfessionalfeesComponent } from './web/professionalfees/professionalfees.component';
import { StandardsComponent } from './web/standards/standards.component';
import { MunicipalratingstandardsComponent } from './web/municipalratingstandards/municipalratingstandards.component';
import { InternationalvaluationstandardsComponent } from './web/internationalvaluationstandards/internationalvaluationstandards.component';
import { GovernanceComponent } from './web/governance/governance.component';
import { LodgealegalcaseorcomplaintComponent } from './web/lodgealegalcaseorcomplaint/lodgealegalcaseorcomplaint.component';
import { FindvaluerComponent } from './web/findvaluer/findvaluer.component';
import { Covid19Component } from './web/covid19/covid19.component';
import { PortfolioComponent } from './web/portfolio/portfolio.component';
import { PropertiesComponent } from './properties/properties.component';
const routes: Routes = [

  { path: '', redirectTo: 'client-login', pathMatch: 'full' },
  // {
  //   path: 'web-home', component: WebHomeComponent,

  //   // children: [
  //   //   { path: 'home-content', component: WebHomeContentComponent, outlet: 'webcontent' },
  //   //   { path: 'examinations', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'events', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'tenderjobs', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'registration', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'professionalfees', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'standards', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'legal', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'findvaluers', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'covid', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'construction1', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'construction2', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   //   { path: 'construction3', component: ConstructionPageComponent, outlet: 'webcontent' },
  //   // ]
  // },
  // { path: 'announcements', component: AnnouncementsComponent, },
  // { path: 'gallery', component: GalleryComponent, },
  // { path: 'examinations', component: ExaminationsComponent, },
  // { path: 'events', component: EventsComponent, },
  // { path: 'notice', component: NoticeComponent, },
  // { path: 'practicalworkschool', component: PracticalwsComponent, },
  // { path: 'TendersAndJobs', component: TenderjobsComponent, },
  // { path: 'registrations', component: RegistrationsComponent, },
  // { path: 'HowToRegister', component: HowtoregisterComponent, },
  // { path: 'AccreditedProgrammes', component: AccreditedprogrammesComponent, },
  // { path: 'E-Log', component: ElogComponent, },
  // { path: 'CET', component: CetComponent, },
  // { path: 'RestrictionCodes', component: RestrictioncodesComponent, },
  // { path: 'Learnership', component: LearnershipComponent, },
  // { path: 'ProfessionalFees', component: ProfessionalfeesComponent, },
  // { path: 'standards', component: StandardsComponent, },
  // { path: 'MunicipalRatingStandards', component: MunicipalratingstandardsComponent, },
  // { path: 'InternationalValuationStandards', component: InternationalvaluationstandardsComponent, },
  // { path: 'governance', component: GovernanceComponent, },
  // { path: 'LodgeALegalCaseOrComplaint', component: LodgealegalcaseorcomplaintComponent, },
  // { path: 'FindValuer', component: FindvaluerComponent, },
  // { path: 'Covid19', component: Covid19Component, },
  // { path: 'Portfolio', component: PortfolioComponent, },
  ///Client
  { path: "client-login", component: LoginComponent },


  {
    path: 'web-app', component: NavbarsComponent,
    children: [
      // { path: 'app-home', component: HomeComponent, outlet: 'appcontent' },
      // { path: 'statement', component: StatementComponent, outlet: 'appcontent' },
      // { path: 'invoice', component: InvoicePDFComponent, outlet: 'appcontent' },
      { path: "cet-upload", component: CetUploadComponent, outlet: 'appcontent' },
      { path: "properties", component: PropertiesComponent, outlet: 'appcontent' },
    ]
  },




  // { path: 'home', component: HomeComponent, outlet: "appcontent" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
