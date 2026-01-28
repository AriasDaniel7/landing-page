import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Service {
  services = signal([
    {
      title: 'Registro de marca',
      description: 'Te acompañamos desde la revisión hasta la radicación.',
      tags: ['Búsqueda previa', 'Documentación completa', 'Seguimiento'],
    },
    {
      title: 'Renovación',
      description: 'Evita perder tu marca por fechas o requisitos.',
      tags: ['Recordatorios', 'Gestión de trámites', 'Sin complicaciones'],
    },
    {
      title: 'Vigilancia',
      description: 'Detecta marcas parecidas y actúa a tiempo.',
      tags: ['Monitoreo continuo', 'Alertas personalizadas', 'Informes detallados'],
    },
    {
      title: 'Oposición',
      description: 'Responde o inicia una oposición con respaldo legal.',
      tags: ['Análisis legal', 'Estrategia personalizada', 'Representación profesional'],
    },
  ]);
}
