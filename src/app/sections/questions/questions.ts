import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../common/services/scroll.service';

interface Question {
  id: number;
  number: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-questions',
  imports: [],
  templateUrl: './questions.html',
  styleUrl: './questions.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Questions {
  protected readonly scrollService = inject(ScrollService);
  protected readonly openQuestionId = signal<number | null>(null);

  protected readonly questions = signal<Question[]>([
    {
      id: 1,
      number: '01',
      question: '¿Cuánto demora el proceso?',
      answer:
        'Depende del caso. Te damos tiempos estimados en la asesoria inicial. Generalmente, el proceso de registro puede tomar entre 8 y 12 meses, pero comenzamos a trabajar en tu caso de inmediato.',
    },
    {
      id: 2,
      number: '02',
      question: '¿Necesito LLC para registrar?',
      answer:
        'No siempre. Te orientamos segun tu situacion. Puedes registrar una marca como persona natural o como entidad comercial. Evaluamos cual opcion es mejor para tu caso especifico.',
    },
    {
      id: 3,
      number: '03',
      question: '¿Puedo registrar si estoy fuera de USA?',
      answer:
        'Si. Evaluamos tu caso y te guiamos. Para solicitantes extranjeros, se requiere un abogado registrado en Estados Unidos, y nosotros podemos ayudarte con ese requisito.',
    },
  ]);

  toggleQuestion(id: number): void {
    this.openQuestionId.update((current) => (current === id ? null : id));
  }

  isOpen(id: number): boolean {
    return this.openQuestionId() === id;
  }

  navigateToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.scrollService.scrollToSection(sectionId);
  }
}
