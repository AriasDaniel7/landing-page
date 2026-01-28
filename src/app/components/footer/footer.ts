import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../common/services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly scrollService = inject(ScrollService);

  navigateToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
