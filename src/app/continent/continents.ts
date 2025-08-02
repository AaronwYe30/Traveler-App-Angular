import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-continents',
  imports: [],
  templateUrl: './continents.html',
  styleUrl: './continents.css'
})
export class Continents {
  @Input({ required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/continents/' + this.avatar;
  }

  onSelectContinents() {
    this.select.emit(this.id);
  }
}
