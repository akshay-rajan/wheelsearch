import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  isTyping = false;
  query = new FormControl("");
  results : any[] = []; // ToDo

  onFocus() {
    this.isTyping = true;
  }

  onBlur() {
    if (this.results.length === 0) {
      this.isTyping = false;
    }
  }

  onInput() {
    const value = this.query.value?.trim();
    if (value) {
      console.log(`typing ${this.query.value}`);
    }
  }
}
