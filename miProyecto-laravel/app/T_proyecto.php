<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class T_proyecto extends Model
{
    //
    protected $fillable = ['pro_nombre','pro_fecplan','pro_presu_plan','pro_presu_final','fk_are_codigo','pro_coor_x',
                            'pro_coor_y','pro_observ','fk_inv_codigo','pro_fecter'];

    public $timestamps = false;
}
