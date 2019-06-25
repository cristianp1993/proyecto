<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_entidades extends Model
{
    //
    protected $fillable = ['ent_nombre','ent_observ','ent_tipoent'];

    public $timestamps = false;
}
