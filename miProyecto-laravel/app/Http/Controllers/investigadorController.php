<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// importamos el modelo
use App\investigador;

class investigadorController extends Controller
{
    //funciones que tendra
    public function show( ){        
         $data = investigador::all();
        
        $string='';
        foreach ($data  as $dato){
           $string .=  $dato.',';
        }
        
        return $data;
    }

    public function create(Request $request){
        return investigador::create($request->all());
    }

    public function update (Request $request , $id){
        $investigador = investigador::findOrFail($id);
        $investigador->update($request->all());
    }
}
