import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface BlogPost {
  title: string;
  status: string;
  excerpt: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './blog.component.html'
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      title: 'Containerizing my Spring Boot app with Docker',
      status: 'Draft',
      excerpt:
        "Getting my first Spring Boot app into a Docker container took a few tries. The Dockerfile itself is short — pull a JDK base image, copy the built jar in, expose the port, run it — but the annoying part was getting the build to actually produce a jar Docker could find. Once it ran locally in a container, wiring it into Jenkins so every push rebuilds the image automatically was the bigger win — I don't manually redeploy anything anymore. Still learning about multi-stage builds to shrink the image size."
    },
    {
      title: 'Setting up my first Ubuntu server',
      status: 'Draft',
      excerpt:
        'I set up a spare machine running Ubuntu Server to host my own stuff instead of relying only on managed platforms. Basics first: SSH key login instead of passwords, a firewall, automatic security updates. It felt like overkill until I remembered this thing is reachable from the internet. Docker runs on top of it now, and Nginx sits in front to route requests to whichever container needs them.'
    },
    {
      title: "Setting up Cloudflare Tunnel so I don't open ports on my router",
      status: 'Draft',
      excerpt:
        "I didn't want to forward ports on my home router just to expose a personal server, so I looked into Cloudflare Tunnel instead. It runs a small daemon on the server that makes an outbound connection to Cloudflare, and traffic comes in through that instead of a directly open port. The nice side effect is I get HTTPS and DDoS protection without configuring any of it myself."
    }
  ];
}
