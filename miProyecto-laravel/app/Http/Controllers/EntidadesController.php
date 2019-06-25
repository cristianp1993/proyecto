<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\T_entidades;
class EntidadesController extends Controller
{
    //
    public function index(){
        // echo "Inicio de metodo";
        $entidades = T_entidades::all();

        return response()->json(array(
            'entidad' => $entidades,
            'status' => 'success'
        ),200);
    }
}
