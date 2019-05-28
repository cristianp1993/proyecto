<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// importamos el modelo
use App\investigador;

class investigadorController extends Controller
{
    //funciones 
    public function show( ){                
        return $data = investigador::all();
    }

    public function store(Request $request){
         investigador::create($request->all());
         return response()->json(["mensaje" => "Investigador creado"]);
    }

    public function update (Request $request , $id){
        $investigador = investigador::findOrFail($id);
        $investigador->update($request->all());
    }
}
