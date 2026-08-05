import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
searchQuery = new FormControl('');
search = output<string|null>();


query = this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((query) => {
      if (query) {
      this.search.emit(query);
      }
      else {
        this.search.emit(null);
      }
    });
   

}
