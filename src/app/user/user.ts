import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randoomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = signal(DUMMY_USERS[randoomUser]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser() {
    const randoomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randoomUser]);
  }
}
