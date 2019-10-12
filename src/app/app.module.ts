import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './resume/avatar/avatar.component';
import { GravatarModule, GravatarConfig } from 'ngx-gravatar';
import { ResumeComponent } from './resume/resume.component';
import { LocationComponent } from './resume/location/location.component';
import { ProfileComponent } from './resume/profile/profile.component';
import { WorkComponent } from './resume/work/work.component';
import { VolunteerComponent } from './resume/volunteer/volunteer.component';
import { EducationComponent } from './resume/education/education.component';
import { AwardComponent } from './resume/award/award.component';

const gravatarConfig = {
  size: 512,
  round: false
} as GravatarConfig;

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ResumeComponent,
    LocationComponent,
    ProfileComponent,
    WorkComponent,
    VolunteerComponent,
    EducationComponent,
    AwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GravatarModule.forRoot(gravatarConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
