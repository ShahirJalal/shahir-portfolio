import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { GithubRepo, GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {
  private readonly username = 'ShahirJalal';

  repoCount: number | null = null;
  followerCount: number | null = null;
  gistsCount: number | null = null;

  repos: GithubRepo[] = [];
  reposLoading = true;
  reposFailed = false;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser(this.username).subscribe({
      next: (user) => {
        this.repoCount = user.public_repos ?? null;
        this.followerCount = user.followers ?? null;
        this.gistsCount = user.public_gists ?? null;
      },
      error: () => {}
    });

    this.githubService.getRecentRepos(this.username).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.reposLoading = false;
      },
      error: () => {
        this.reposLoading = false;
        this.reposFailed = true;
      }
    });
  }
}
