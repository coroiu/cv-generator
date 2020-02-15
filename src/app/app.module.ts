import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MonacoEditorModule } from 'ngx-monaco-editor';

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
import { PublicationComponent } from './resume/publication/publication.component';
import { SkillComponent } from './resume/skill/skill.component';
import { LanguageComponent } from './resume/language/language.component';
import { InterestComponent } from './resume/interest/interest.component';
import { ReferenceComponent } from './resume/reference/reference.component';
import { ProjectComponent } from './resume/project/project.component';
import { ThemeSectionComponent } from './resume/theme-section/theme-section.component';
import { ResumeSectionComponent } from './resume/resume-section/resume-section.component';
import { EditorComponent } from './editor/editor.component';
import { CourseComponent } from './resume/course/course.component';
import { OtherComponent } from './resume/other/other.component';

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
    CourseComponent,
    AwardComponent,
    PublicationComponent,
    SkillComponent,
    LanguageComponent,
    InterestComponent,
    ReferenceComponent,
    ProjectComponent,
    ThemeSectionComponent,
    ResumeSectionComponent,
    EditorComponent,
    OtherComponent
  ],
  entryComponents: [
    AvatarComponent,
    ResumeComponent,
    LocationComponent,
    ProfileComponent,
    WorkComponent,
    VolunteerComponent,
    EducationComponent,
    AwardComponent,
    PublicationComponent,
    SkillComponent,
    LanguageComponent,
    InterestComponent,
    ReferenceComponent,
    ProjectComponent,
    ThemeSectionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GravatarModule.forRoot(gravatarConfig),
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
