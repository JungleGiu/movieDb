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
// pages : number[] = []
ngOnInit() {
  this.totalResults = this.results.total_results
  this.totalPages = this.results.total_pages
  this.page = this.results.page
  this.resultsPerPage = this.results.results.length
  // this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1)
}



nextPage() {
  if (this.page < this.totalPages) {
    this.page++;
    this.pageChange.emit(this.page);
  }
}
}
