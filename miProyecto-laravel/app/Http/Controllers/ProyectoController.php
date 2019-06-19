<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Proyecto;


class ProyectoController extends Controller
{
    //

    public function guardarProyecto(Request $request){

        echo "iniciar metodo ";

        if ($request) {
        
            $proyecto = new Proyecto([
                'nombre' => $request->get('nombre'),
                'presupuesto' => $request->get('presupuesto'),
                'fecha' => $request->get('fecha'),
    
            ]);
        }
        else{
            
           $error = "Error";
        }

        $proyecto->save();
        return response()->json('Successfully added');
    }
}
