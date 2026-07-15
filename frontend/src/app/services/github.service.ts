import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GithubUser {
  public_repos: number;
  followers: number;
  public_gists: number;
}

export interface GithubRepo {
  name: string;
  stargazers_count: number;
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly apiBase = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiBase}/users/${username}`);
  }

  getRecentRepos(username: string, perPage = 5): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(
      `${this.apiBase}/users/${username}/repos?sort=updated&per_page=${perPage}`
    );
  }
}
