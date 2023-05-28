import {Component, Inject} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selected: Array<any> = [];
  selectedIds: Array<any> = [];
  options: any;


  onUserSelectionChange(event: any) {
    if(this.selected.includes(event.username)){
      const selected = this.selected.indexOf(event.username);
      this.selected.splice(selected, 1);
    }else{
      this.selected.push(event.username);
    }
    if(this.selectedIds.includes(event.id)){
      const selected = this.selectedIds.indexOf(event.id);
      this.selectedIds.splice(selected, 1);
    }else{
      this.selectedIds.push(event.id);
    }


    console.debug("USERNAMES:" + this.selected);
    console.debug("IDS: " + this.selectedIds);
  }
}
