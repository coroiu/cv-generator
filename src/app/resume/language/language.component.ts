import { Component, OnInit, Input } from '@angular/core';
import { Language } from 'src/app/json-resume/json-resume';
import { toKebabCase } from 'src/app/utils';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() language: Language;

  constructor() { }

  ngOnInit() {
  }

  get fluencyClasses() {
    return ['fluency', toKebabCase(this.language.fluency)];
  }
}
