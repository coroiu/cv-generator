import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/json-resume/json-resume';
import { toKebabCase } from 'src/app/utils';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

  get levelClasses() {
    return ['skill', toKebabCase(this.skill.level)];
  }
}
