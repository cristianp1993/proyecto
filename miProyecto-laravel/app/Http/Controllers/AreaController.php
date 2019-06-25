<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\T_area;
class AreaController extends Controller
{
    //
    public function index(){
        // echo "Inicio de metodo";
        $area = T_area::all();
        return response()->json(array(
            'area' => $area,
            'status' => 'success'
        ),200);
    }
}
