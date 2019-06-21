<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_investigador extends Model
{
    //protected $table = '';
    //proteted $primaryKey = '';
    protected $fillable = ['inv_nombre','inv_apellPater','inv_apellMater','inv_cedula', 
    'inv_correo','inv_telefono','fk_ciu_codigo','fk_ent_codigo'];

    public $timestamps = false;

    
      

}
