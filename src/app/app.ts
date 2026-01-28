import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { MetaService } from './services/meta.service';
import { Hero } from "./sections/hero/hero";
import { Service } from "./sections/service/service";
import { Process } from "./sections/process/process";

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Service, Process],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setDefaultMetaTags();
  }
}
