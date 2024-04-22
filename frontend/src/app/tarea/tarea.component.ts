import { Component, Input, OnInit  } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit {
  data: Tarea[] = [];
  detail?: Tarea;
  guardadoExitoso = false;
  errorAlGuardar = false;

  constructor(private tareaService: TareaService) { }

  ngOnInit() {
    this.tareaService.read().subscribe({
      next: (datas: Tarea[]) => {
        this.data = datas;
      },
      error: (error) => {
        console.error('Error al obtener las tareas', error);
      },
      complete: () => {
        console.log('Lectura de tareas completada');
      }
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.tareaService.insert(form.value).subscribe(
        response => {
          console.log('Tarea creada', response);
          this.guardadoExitoso = true;
          this.ngOnInit();
          setTimeout(() => {
            this.guardadoExitoso = false;
          }, 3000);
          this.errorAlGuardar = false;
        },
        error => {
          console.error('Error al crear la tarea', error);
          this.errorAlGuardar = true;
          setTimeout(() => {
            this.errorAlGuardar = false;
          }, 3000);
          this.guardadoExitoso = false;
        }
      );
    }
  }

  onSubmitEdit(form: any) {
    if (form.valid) {
      let temp = new Tarea(
        form.value.idEdit,
        form.value.tituloEdit,
        form.value.descripcionEdit,
        form.value.estadoEdit,
        undefined,
        new Date()
      );
      
      this.tareaService.update(temp).subscribe(
        { 
          next: (response) => { 
            console.log('Tarea actualizada', response);
            this.guardadoExitoso = true;
            this.ngOnInit();
            setTimeout(() => {
              this.guardadoExitoso = false;
            }, 3000);
            this.errorAlGuardar = false;
          },
          error: (error) => {
            console.error('Error al actualizar la tarea', error);
            this.errorAlGuardar = true;
            setTimeout(() => {
              this.errorAlGuardar = false;
            }, 3000);
            this.guardadoExitoso = false;
          },
          complete: () => {
            console.log('Escritura de tarea completada');
          }
        }
      );
    }
  }

  onDelete(id: any){
    this.tareaService.delete(id).subscribe(
      response => {
        console.log('Tarea eliminada', response);
        this.ngOnInit();
      },
      error => {
        console.error('Error al eliminar la tarea', error);
      }
    );
  }

  onEdit(id: any){
    this.tareaService.readDetail(id).subscribe({
      next: (detail: Tarea) => {
        this.detail = detail;
      },
      error: (error) => {
        console.error('Error al obtener la tarea', error);
      },
      complete: () => {
        console.log('Lectura de tarea completada');
      }
    });
  }
}
