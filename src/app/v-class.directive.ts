import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import * as isArray from "lodash.isarray";
import * as isEqual from "lodash.isequal";

type ClassAsArray = Array<string | object>;

@Directive({
  selector: "[vClass]"
})
export class VClassDirective implements OnInit, OnChanges {
  element: Element;
  @Input() vClass: string | object | ClassAsArray;

  constructor(public elm: ElementRef) {}

  ngOnInit() {
    this.elm.nativeElement.className = this.fixClass().join(" ");
  }

  ngOnChanges(changes: SimpleChanges) {
    const { vClass } = changes;
    const isChanged =
      !vClass.firstChange &&
      !isEqual(vClass.currentValue, vClass.previousValue);

    if (isChanged) {
      this.elm.nativeElement.className = this.fixClass(
        vClass.currentValue
      ).join(" ");
    }
  }

  fixClass(vClass: any = null) {
    const classStr = [];
    const vC = vClass || this.vClass;

    if (typeof vC === "string") {
      classStr.push(vC);
    } else if (isArray(vC)) {
      (vC as ClassAsArray).forEach((item) => {
        classStr.push(this.fixClass(item).join(" "));
      });
    } else if (!isArray(vC) && typeof vC === "object") {
      Object.entries(vC)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .forEach((item) => {
          classStr.push(item);
        });
    }

    return classStr;
  }
}
