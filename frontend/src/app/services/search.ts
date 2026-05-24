import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);
  private baseURL = "http://127.0.0.1:8000/"

  results = signal<any[]>([]);
  loading = signal(false);

  search(query: String, path: String = "search") {
    this.loading.set(true);

    this.http.get<any>(
      `${this.baseURL}${path}?q=${query}&size=5`
    ).subscribe({
      next: (response) => {
        this.results.set(response.hits?.hits || []); // TODO: to be edited
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.loading.set(false);
  }
}
