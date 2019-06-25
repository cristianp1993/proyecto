<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\T_ciudades;

class CiudadesController extends Controller
{
    //
    public function index(){
        // echo "Inicio de metodo";
        $ciudades = T_ciudades::all();

        return response()->json(array(
            'ciudad' => $ciudades,
            'status' => 'success'
        ),200);
    }
}
