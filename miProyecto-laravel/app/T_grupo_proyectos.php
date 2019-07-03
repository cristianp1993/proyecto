<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_grupo_proyectos extends Model
{
    //
    protected $fillable = ['gru_codigo','pro_codigo','fec_inicio','fec_fin', 'inv_observ'];

    public $timestamps = false;
}
