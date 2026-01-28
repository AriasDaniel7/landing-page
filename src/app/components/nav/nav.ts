import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [NgOptimizedImage],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }
}
