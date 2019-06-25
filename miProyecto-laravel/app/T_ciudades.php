<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_ciudades extends Model
{
    //
    protected $fillable = ['ciu_nombre','fk_dep_codigo'];

    public $timestamps = false;

}
