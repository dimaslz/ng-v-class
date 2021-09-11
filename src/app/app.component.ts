import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  dynamicClass = [];

  addClass(c: any) {
    this.dynamicClass = this.dynamicClass.concat([c]);
  }
}
