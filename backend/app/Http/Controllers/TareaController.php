<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tarea;

class TareaController extends Controller
{
    // Obtener todas las tareas
    public function index()
    {
        $tareas = Tarea::all();
        return response()->json($tareas);
    }

    // Crear una nueva tarea
    public function store(Request $request)
    {
        $tarea = new Tarea();
        $tarea->titulo = $request->input('titulo');
        $tarea->descripcion = $request->input('descripcion');
        $tarea->estado = $request->input('estado');
        $tarea->save();

        return response()->json($tarea, 201);
    }

    // Obtener una tarea específica por su id
    public function show($id)
    {
        $tarea = Tarea::find($id);

        if ($tarea) {
            return response()->json($tarea);
        } else {
            return response()->json(['message' => 'Tarea no encontrada'], 404);
        }
    }

    // Actualizar una tarea específica por su id
    public function update(Request $request, $id)
    {
        $tarea = Tarea::find($id);

        if ($tarea) {
            $tarea->titulo = $request->input('titulo');
            $tarea->descripcion = $request->input('descripcion');
            $tarea->estado = $request->input('estado');
            $tarea->save();

            return response()->json($tarea);
        } else {
            return response()->json(['message' => 'Tarea no encontrada'], 404);
        }
    }

    // Eliminar una tarea específica por su id
    public function destroy($id)
    {
        $tarea = Tarea::find($id);

        if ($tarea) {
            $tarea->delete();
            return response()->json(['message' => 'Tarea eliminada']);
        } else {
            return response()->json(['message' => 'Tarea no encontrada'], 404);
        }
    }
      
}
