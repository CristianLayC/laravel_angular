export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    estado: 'pendiente' | 'en progreso' | 'completada';
    fecha_creacion: Date;
    fecha_actualizacion: Date;
  }
  
  export class Tarea implements Tarea {
    constructor(
      id: number,
      titulo: string,
      descripcion: string,
      estado: 'pendiente' | 'en progreso' | 'completada',
      fecha_creacion?: Date,
      fecha_actualizacion?: Date
    ) {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.estado = estado;
      this.fecha_creacion = fecha_creacion ? fecha_creacion : new Date();
      this.fecha_actualizacion = fecha_actualizacion ? fecha_actualizacion : new Date;
    }

    shortCreate(
        id: number,
        titulo: string,
        descripcion: string,
        estado: 'pendiente' | 'en progreso' | 'completada',
      ) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
      }
  }