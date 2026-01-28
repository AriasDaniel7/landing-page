import { isPlatformBrowser } from '@angular/common';
import { computed, DestroyRef, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  private _scrollY = signal(0);
  scrollY = computed(() => this._scrollY());
  isScrolled = signal(false);

  private scrollThreshold = signal(50);

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener() {
    if (isPlatformBrowser(this.platformId)) {
      const handleScroll = () => {
        const currentScroll = window.scrollY;
        this._scrollY.set(currentScroll);
        this.isScrolled.set(currentScroll > this.scrollThreshold());
      };

      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
      });
    }
  }

  setScrollThreshold(threshold: number) {
    this.scrollThreshold.set(threshold);
    this.isScrolled.set(this._scrollY() > threshold);
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 68; // Altura aproximada del navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }
}
