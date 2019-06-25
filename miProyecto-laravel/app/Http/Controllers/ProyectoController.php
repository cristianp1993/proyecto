<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\t_proyecto;


class ProyectoController extends Controller
{

    public function index(){
        // echo "Inicio de metodo";
        $proyecto = t_proyecto::all();

        return response()->json(array(
            'proyecto' => $proyecto,
            'status' => 'success'
        ),200);
    }
    //Guardar proyecto    
    public function guardarProyecto(Request $request){

        if($request){
            
            $investigador = new T_proyecto([
            'pro_nombre' => $request->get('pro_nombre'),
            'pro_fecplan' => $request->get('pro_fecplan'),
            'pro_presu_plan' => $request->get('pro_presu_plan'),
            'pro_presu_final' => $request->get('pro_presu_final'),
            'fk_are_codigo' => $request->get('fk_are_codigo'),
            'pro_coor_x' => $request->get('pro_coor_x'),
            'pro_coor_y' => $request->get('pro_coor_y'),
            'fk_ent_codigo' => $request->get('fk_ent_codigo'),
            'fk_inv_codigo' => $request->get('fk_inv_codigo'),
            'pro_observ' => $request->get('pro_observ')
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
