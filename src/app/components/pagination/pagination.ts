import { Component, Input , Output, inject, EventEmitter, WritableSignal} from '@angular/core';
import { TMDBresponse, Api } from '../../services/api';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
@Input({required : true}) results!: TMDBresponse
@Input({required : true}) url!:WritableSignal<string> | string
@Output() pageChange = new EventEmitter<number>();

apiCall = inject(Api)

totalResults: number = 0
totalPages: number = 0
page: number = 1
resultsPerPage : number = 0
pages : number[] = []

ngOnInit() {
  this.totalResults = this.results.total_results
  this.totalPages = this.results.total_pages
  this.page = this.results.page
  this.resultsPerPage = this.results.results.length
  this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)
}

pagesToDisplay(array: number[], currentPage: number): number[] {
  const visiblePages = 7;
  let startPage = currentPage - Math.floor(visiblePages / 2);
  let endPage = currentPage + Math.floor(visiblePages / 2);
  if (currentPage <= 3)  {
   startPage = 1;
    endPage = visiblePages;
  }
  const visiblePagesArr = array.slice(startPage-1, endPage);
  return visiblePagesArr;
}

nextPage() {
  if (this.page < this.totalPages) {
    this.page++;
    this.pageChange.emit(this.page);
  }
}

previousPage() {
  if (this.page > 1) {
    this.page--;
    this.pageChange.emit(this.page);
  }
}

changePage(page: number) {
  this.page = page;
  this.pageChange.emit(this.page);
}

}
