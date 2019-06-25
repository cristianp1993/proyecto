<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Proyecto;


class ProyectoController extends Controller
{
    //

    public function guardarProyecto(Request $request){

        if($request){
            
            $investigador = new T_investigador([
            'inv_nombre' => $request->get('inv_nombre'),
            'inv_apellPater' => $request->get('inv_apellPater'),
            'inv_apellMater' => $request->get('inv_apellMater'),
            'inv_cedula' => $request->get('inv_cedula'),
            'inv_correo' => $request->get('inv_correo'),
            'inv_telefono' => $request->get('inv_telefono'),
            'fk_ciu_codigo' => $request->get('fk_ciu_codigo'),
            'fk_ent_codigo' => $request->get('fk_ent_codigo')
            ]);
            
            $investigador->save();
            
            $mensaje = "Se agrego el investigador";
                
        } 

        // return $mensaje;
        return response()->json(array(
            'investigador' => $mensaje,
            'status' => 'success'
        ),200);
    }
}
