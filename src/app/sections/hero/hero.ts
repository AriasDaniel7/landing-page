import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../common/services/scroll.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly scrollService = inject(ScrollService);

  navigateToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.scrollService.scrollToSection(sectionId);
  }
}
