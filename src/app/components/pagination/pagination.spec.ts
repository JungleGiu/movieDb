import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Pagination } from './pagination';
import { TMDBresponse } from '../../services/api';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Pagination', () => {
  let component: Pagination;
  let fixture: ComponentFixture<Pagination>;
  let mockTMDBresponse: TMDBresponse;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination);
    component = fixture.componentInstance;

  mockTMDBresponse = {
      page: 1,
      results: Array(20).fill({}), 
      total_pages: 100,
      total_results: 2000
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   describe('ngOnInit', () => {
    it('should initialize properties from results input', () => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      
      fixture.detectChanges();
      
      expect(component.totalResults).toBe(2000);
      expect(component.totalPages).toBe(100);
      expect(component.page).toBe(1);
      expect(component.resultsPerPage).toBe(20);
      expect(component.pages.length).toBe(100);
    });

    it('should create pages array with correct length', () => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      
      fixture.detectChanges();
      
      expect(component.pages.length).toBe(100);
      expect(component.pages[0]).toBe(1);
      expect(component.pages[99]).toBe(100);
    });

  });

  describe('pagesToDisplay', () => {
    beforeEach(() => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      fixture.detectChanges();
    });

    it('should return 7 pages centered around current page', () => {
      const result = component.pagesToDisplay(component.pages, 50);
      
      expect(result.length).toBe(7);
      expect(result).toEqual([47, 48, 49, 50, 51, 52, 53]);
    });

    it('should return first 7 pages when current page is 1', () => {
      const result = component.pagesToDisplay(component.pages, 1);
      
      expect(result.length).toBe(7);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return first 7 pages when current page is 2', () => {
      const result = component.pagesToDisplay(component.pages, 2);
      
      expect(result.length).toBe(7);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should return first 7 pages when current page is 3', () => {
      const result = component.pagesToDisplay(component.pages, 3);
      
      expect(result.length).toBe(7);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should center pages when current page is 4 or higher', () => {
      const result = component.pagesToDisplay(component.pages, 4);
      
      expect(result.length).toBe(7);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]); // Ancora primi 7 per la logica
    });

    it('should handle pages near the end', () => {
      const result = component.pagesToDisplay(component.pages, 98);
      
      expect(result.length).toBeLessThanOrEqual(7);
      expect(result).toContain(98);
    });

    it('should work with small page arrays', () => {
      const smallPages = [1, 2, 3, 4, 5];
      const result = component.pagesToDisplay(smallPages, 3);
      
      expect(result.length).toBeLessThanOrEqual(5);
    });
  });

  describe('nextPage', () => {
    beforeEach(() => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      fixture.detectChanges();
    });

    it('should increment page and emit event', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 5;
      
      component.nextPage();
      
      expect(component.page).toBe(6);
      expect(component.pageChange.emit).toHaveBeenCalledWith(6);
    });

    it('should not increment beyond total pages', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 100;
      
      component.nextPage();
      
      expect(component.page).toBe(100);
      expect(component.pageChange.emit).not.toHaveBeenCalled();
    });

    it('should work from first page', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 1;
      
      component.nextPage();
      
      expect(component.page).toBe(2);
      expect(component.pageChange.emit).toHaveBeenCalledWith(2);
    });
  });

  describe('previousPage', () => {
    beforeEach(() => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      fixture.detectChanges();
    });

    it('should decrement page and emit event', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 5;
      
      component.previousPage();
      
      expect(component.page).toBe(4);
      expect(component.pageChange.emit).toHaveBeenCalledWith(4);
    });

    it('should not decrement below 1', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 1;
      
      component.previousPage();
      
      expect(component.page).toBe(1);
      expect(component.pageChange.emit).not.toHaveBeenCalled();
    });

    it('should work from last page', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 100;
      
      component.previousPage();
      
      expect(component.page).toBe(99);
      expect(component.pageChange.emit).toHaveBeenCalledWith(99);
    });
  });

  describe('changePage', () => {
    beforeEach(() => {
      component.results = mockTMDBresponse;
      component.url = 'http://mock.url';
      fixture.detectChanges();
    });

    it('should change to specified page and emit event', () => {
      spyOn(component.pageChange, 'emit');
      
      component.changePage(42);
      
      expect(component.page).toBe(42);
      expect(component.pageChange.emit).toHaveBeenCalledWith(42);
    });

    it('should change from any page to any other page', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 10;
      
      component.changePage(75);
      
      expect(component.page).toBe(75);
      expect(component.pageChange.emit).toHaveBeenCalledWith(75);
    });

    it('should handle page 1', () => {
      spyOn(component.pageChange, 'emit');
      component.page = 50;
      
      component.changePage(1);
      
      expect(component.page).toBe(1);
      expect(component.pageChange.emit).toHaveBeenCalledWith(1);
    });
  });

});
