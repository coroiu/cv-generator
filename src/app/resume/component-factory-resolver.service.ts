import { Injectable, ComponentFactoryResolver, ComponentFactory, Component } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { AwardComponent } from './award/award.component';
import { ThemeSectionComponent } from './theme-section/theme-section.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryResolverService {
  private themeElements = {
    avatar: AvatarComponent,
    award: AwardComponent
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  resolveComponentFactory(component: string): ComponentFactory<any> {
    if (component in this.themeElements) {
    } else {
      return this.componentFactoryResolver.resolveComponentFactory(ThemeSectionComponent);
    }
  }
}
