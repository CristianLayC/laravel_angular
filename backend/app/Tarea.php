<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{

    public $timestamps = false;
    protected $fillable = [
        'titulo',
        'descripcion',
        'estado',
        'fecha_creacion',
        'fecha_actualizacion'
    ];
}
