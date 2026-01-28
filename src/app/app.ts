import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { MetaService } from './services/meta.service';
import { Hero } from "./sections/hero/hero";
import { Service } from "./sections/service/service";
import { Process } from "./sections/process/process";
import { About } from "./sections/about/about";
import { Questions } from "./sections/questions/questions";
import { Contact } from "./sections/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Service, Process, About, Questions, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setDefaultMetaTags();
  }
}
