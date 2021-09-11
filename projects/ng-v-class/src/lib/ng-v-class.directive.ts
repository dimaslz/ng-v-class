import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import isEqual from "lodash.isequal";

import { NgVClass } from './ng-v-class.types';

import { fixClass } from './ng-v-class.util';

@Directive({
  selector: "[ngVClass]"
})
export class NgVClassDirective implements OnInit, OnChanges {
  @Input() ngVClass: NgVClass = "";

  constructor(public elm: ElementRef) {}

  ngOnInit() {
    this.elm.nativeElement.className = fixClass(this.ngVClass);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { ngVClass } = changes;
    const isChanged =
      !ngVClass.firstChange &&
      !isEqual(ngVClass.currentValue, ngVClass.previousValue);

    if (isChanged) {
      this.elm.nativeElement.className = fixClass(
        ngVClass.currentValue
      );
    }
  }
}
