import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';


import { AppRoutingModule }     from './app-routing.module';
import { TabsModule } from 'ng2-bootstrap';


import {MyService} from './service';

import { AppComponent } from './app.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { ResumeComponent } from './resume/resume.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { DetailsComponent } from './details/details.component';
import { TabsComponent } from './tabs/tabs.component';






@NgModule({
  declarations: [
    AppComponent,
    LogincomponentComponent,
    ResumeComponent,
    SummaryComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
    HobbiesComponent,
    DetailsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,JsonpModule,AppRoutingModule,TabsModule.forRoot()
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
