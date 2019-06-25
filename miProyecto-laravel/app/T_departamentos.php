<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_departamentos extends Model
{
    protected $fillable = ['dep_nombre'];

    public $timestamps = false;
}
