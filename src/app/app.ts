import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { MetaService } from './services/meta.service';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setDefaultMetaTags();
  }
}
