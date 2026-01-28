import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../common/services/scroll.service';

@Component({
  selector: 'app-nav',
  imports: [NgOptimizedImage],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Nav {
  protected readonly scrollService = inject(ScrollService);

  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  navigateToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.scrollService.scrollToSection(sectionId);
    this.isMenuOpen.set(false);
  }
}
