import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../services/search';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  isTyping = false;
  query = new FormControl("");

  searchService = inject(SearchService);

  onFocus() {
    this.isTyping = true;
  }

  onBlur() {
    if (document.hasFocus() && this.searchService.results().length === 0) {
      this.isTyping = false;
    }
  }

  onInput() {
    const value = this.query.value?.trim();
    if (value) {
      console.log(`typing ${this.query.value}`);
      this.searchService.search(value);
      console.log(this.searchService.results());
    } else {
      this.searchService.results.set([]);
    }
  }
}
