import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task/task';
@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/continents/' + this.name;
  }

  onSelectUser() {
    this.select.emit(this.name);
  }
}
