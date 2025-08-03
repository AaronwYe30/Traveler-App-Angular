import { Component, EventEmitter, Input, Output} from '@angular/core';

interface Continent {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-continents',
  imports: [],
  templateUrl: './continents.html',
  styleUrl: './continents.css'
})
export class Continents {
  @Input({required: true}) continent!: Continent;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/continents/' + this.continent.avatar;
  }

  onSelectContinents() {
    this.select.emit(this.continent.id);
  }
}
