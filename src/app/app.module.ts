import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav';
import { InvoicesComponent } from './invoices/invoices.component';

import { HttpClientModule } from '@angular/common/http';
import { BnNgIdleService } from 'bn-ng-idle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { InvoicePDFComponent } from './invoice/invoice-pdf/invoice-pdf.component';
import { jsPDF } from 'jspdf';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResetDialogComponent } from './reset-dialog/reset-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StatementComponent } from './statement/statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CetUploadComponent } from './cet-upload/cet-upload.component';
import { CustomedropzoneComponent } from './shared/customedropzone/customedropzone.component';
import { ProgressComponent } from './shared/progress/progress.component';

import { MatTabsModule } from '@angular/material/tabs';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatListModule } from '@angular/material/list';
import { WebHomeComponent } from './web/web-home/web-home.component';
import { WebHomeContentComponent } from './web/web-home-content/web-home-content.component';
import { ConstructionPageComponent } from './web/construction-page/construction-page.component';
import { NavbarsComponent } from './shared/navbars/navbars.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConstructionMainComponent } from './web/construction-main/construction-main/construction-main.component';
import { ConstructionDialogComponent } from './web/construction-main/construction-dialog/construction-dialog.component';
import { AnnouncementsComponent } from './web/announcements/announcements.component';
import { GalleryComponent } from './web/gallery/gallery.component';
import { LightgalleryModule } from 'lightgallery/angular';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponent } from './web/registrations/dialog/dialog.component';
import { FooterComponent } from './web/footer/footer.component';
import { PortfolioComponent } from './web/portfolio/portfolio.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PropertiesComponent } from './properties/properties.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvoicesComponent,
    HomeComponent,
    InvoicePDFComponent,
    ResetDialogComponent,
    StatementComponent,
    CetUploadComponent,
    CustomedropzoneComponent,
    ProgressComponent,
    WebHomeComponent,
    WebHomeContentComponent,
    ConstructionPageComponent,
    NavbarsComponent,
    ConstructionMainComponent,
    ConstructionDialogComponent,
    AnnouncementsComponent,
    GalleryComponent,
    ExaminationsComponent,
    EventsComponent,
    NoticeComponent,
    PracticalwsComponent,
    TenderjobsComponent,
    RegistrationsComponent,
    HowtoregisterComponent,
    AccreditedprogrammesComponent,
    ElogComponent,
    CetComponent,
    RestrictioncodesComponent,
    LearnershipComponent,
    ProfessionalfeesComponent,
    StandardsComponent,
    MunicipalratingstandardsComponent,
    InternationalvaluationstandardsComponent,
    GovernanceComponent,
    LodgealegalcaseorcomplaintComponent,
    FindvaluerComponent,
    Covid19Component,
    DialogComponent,
    FooterComponent,
    PortfolioComponent,
    PropertiesComponent,


  ],
  imports: [
    PdfViewerModule,
    MatTooltipModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    FeatherModule.pick(allIcons),
    FeatherModule,
    MatGridListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    PdfViewerModule,
    MatTabsModule,
    NgxExtendedPdfViewerModule,
    MatListModule,
    FontAwesomeModule,
    SwiperModule,
    NgbModule,
    LightgalleryModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
