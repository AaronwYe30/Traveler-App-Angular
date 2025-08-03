import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { DUMMY_USERS } from './dummy-users';
import { Task } from "./task/task";
import { Continents } from './continent/continents';


@Component({
  selector: 'app-root',
  imports: [Header, Continents, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  continents = DUMMY_USERS;
  selectedContinentId?: string;

  get selectContinent() {
    return this.continents.find((continent) => continent.id === this.selectedContinentId)!;
  }

  onSelectContinent(id: string) {
    this.selectedContinentId = id;
  }
}
