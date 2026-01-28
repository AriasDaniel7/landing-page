import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-process',
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Process {
  process = signal([
    {
      step: '01',
      title: 'Asesoría inicial',
      description: 'Evaluamos tu caso en 15 minutos sin costo',
    },
    {
      step: '02',
      title: 'Busqueda y estrategia',
      description: 'Analisis completo de viabilidad',
    },
    {
      step: '03',
      title: 'Radicacion y seguimiento',
      description: 'Acompañamiento total del proceso',
    },
  ]);
}
