import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() name?: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/continents/' + this.name;
  }

  onSelectUser() {
    this.select.emit(this.name);
  }
}
