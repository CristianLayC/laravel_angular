import { Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: TareaComponent },
    { path: 'add', component: TareaComponent },
    { path: '**', redirectTo: '/' }
];