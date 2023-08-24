import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IMenuType} from "../../../models/menuType";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent  implements OnInit{

  menuTypes: IMenuType[] = [];
  selectedMenuType: IMenuType;

  @Output() updateMenuType: EventEmitter<IMenuType> = new EventEmitter()

  constructor() {
    this.selectedMenuType = {
      type: '',
      label: ''
    }
  }

  ngOnInit(): void {
    this.menuTypes = [
      {type: 'Custom', label: 'Custom'},
      {type: 'extended', label: 'Extended'},
    ]
  }

  changeType(ev: DropdownChangeEvent): void {
    console.log('ev', ev)
    this.updateMenuType.emit(ev.value)
  }

}
