<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_tipo_investigacions extends Model
{
    //

    protected $fillable = ['inv_nombre','inv_descri'];
    public $timestamps = false;
}
