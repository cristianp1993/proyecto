<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_categoria extends Model
{
    //
    protected $fillable = ['cat_nombre','area_codigo'];

    public $timestamps = false;
}
