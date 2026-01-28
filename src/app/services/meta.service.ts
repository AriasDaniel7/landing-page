import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface MetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setMetaTags(tags: MetaTags): void {
    if (tags.title) {
      this.setTitle(tags.title);
    }

    if (tags.description) {
      this.meta.updateTag({ name: 'description', content: tags.description });
    }

    if (tags.keywords) {
      this.meta.updateTag({ name: 'keywords', content: tags.keywords });
    }

    if (tags.author) {
      this.meta.updateTag({ name: 'author', content: tags.author });
    }

    if (tags.robots) {
      this.meta.updateTag({ name: 'robots', content: tags.robots });
    }

    // Open Graph tags
    if (tags.ogTitle) {
      this.meta.updateTag({ property: 'og:title', content: tags.ogTitle });
    }

    if (tags.ogDescription) {
      this.meta.updateTag({ property: 'og:description', content: tags.ogDescription });
    }

    if (tags.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: tags.ogImage });
    }

    if (tags.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: tags.ogUrl });
    }

    // Twitter Card tags
    if (tags.twitterCard) {
      this.meta.updateTag({ name: 'twitter:card', content: tags.twitterCard });
    }

    if (tags.twitterTitle) {
      this.meta.updateTag({ name: 'twitter:title', content: tags.twitterTitle });
    }

    if (tags.twitterDescription) {
      this.meta.updateTag({ name: 'twitter:description', content: tags.twitterDescription });
    }

    if (tags.twitterImage) {
      this.meta.updateTag({ name: 'twitter:image', content: tags.twitterImage });
    }
  }

  setDefaultMetaTags(): void {
    this.setMetaTags({
      title: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
      description:
        'Asesoría legal clara para registrar tu marca en USA. Evaluación inicial sin costo y soporte por WhatsApp.',
      robots: 'index, follow',
      ogTitle: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
      ogDescription:
        'Asesoría legal clara para registrar tu marca en USA. Evaluación inicial sin costo y soporte por WhatsApp.',
      twitterCard: 'summary_large_image',
      twitterTitle: 'MarcaFirme USA | Registro de Marca en Estados Unidos',
      twitterDescription:
        'Asesoría legal clara para registrar tu marca en USA. Evaluación inicial sin costo y soporte por WhatsApp.',
    });
  }

  removeTag(name: string, isProperty = false): void {
    if (isProperty) {
      this.meta.removeTag(`property='${name}'`);
    } else {
      this.meta.removeTag(`name='${name}'`);
    }
  }
}
