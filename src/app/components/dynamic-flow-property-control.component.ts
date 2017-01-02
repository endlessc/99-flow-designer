import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { 
  FlowPropertyBase,
  TextboxFlowProperty,
  DropdownFlowProperty,
  TextareaFlowProperty
} from '../models/flow-data-def';


@Component({
  selector: 'app-dynamic-flow-property-control',
  template: `
  <label [attr.for]="property.name">{{property.label}}</label>

  <div [ngSwitch]="property.controlType" [formGroup]="formGroup">
    <!--单行文本-->
    <input *ngSwitchCase="'text'" [formControlName]="property.guid"
            [id]="property.guid" [readonly]="property.readonly? 'readonly' :'' ">
    <!--下拉选择-->        
    <select *ngSwitchCase="'dropdown'" [id]="property.guid"  [formControlName]="property.guid">
      <option *ngFor="let opt of property.options" [value]="opt.value">{{opt.text}}</option>
    </select>
    <!--多行文本-->
    <textarea *ngSwitchCase="'textarea'" [formControlName]="property.guid"
            [id]="property.guid" >
    </textarea>
    <!--未来的自定义组件-->
  </div> 

  <div class="ui pointing red basic label" *ngIf="!isValid">"{{property.label}}"不能为空!</div>  
  `
  // templateUrl: './dynamic-flow-property-control.component.html'
})
export class DynamicFlowPropertyControlComponent implements OnInit {
  @Input() property: FlowPropertyBase<any>;
  @Input() formGroup: FormGroup;
  get isValid() { 
    return this.formGroup.controls[this.property.guid].valid; 
  }

  constructor() { }

  ngOnInit() {
  }

}
