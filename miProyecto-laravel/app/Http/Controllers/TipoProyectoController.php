<?php

namespace App\Http\Controllers;
use App\T_tipo_investigacions;

use Illuminate\Http\Request;

class TipoProyectoController extends Controller
{
    //
    public function index(){
        // echo "Inicio de metodo";
        $tipo = T_tipo_investigacions::all();
        return response()->json(array(
            'tipo' => $tipo,
            'status' => 'success'
        ),200);
    }
}
