import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routes';
import { CarouselModule } from 'primeng/carousel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StudentLeaveComponent } from '../student-leave/student-leave.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [HomeRoutingModule, CarouselModule, CalendarModule, FormsModule, ChartModule, DropdownModule, InputSwitchModule, TableModule, ButtonModule],
  declarations: [HomeComponent, HeaderComponent, SidebarComponent, StudentLeaveComponent],
})
export class HomeModule { }
