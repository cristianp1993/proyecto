<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// importamos el modelo
use App\T_investigador;

class investigadorController extends Controller
{
    //funciones 
    public function index(){

        echo "Index de investigador"; die();
    }
    
    public function show( ){                
        return $data = T_investigador::all();
    }

    public function store(Request $request){
        
        // recoger los datos por post
        $json = $request->input('json',null);
        $params = json_decode($json);

        $params_array = json_decode($json, true);
        // validar los datos
        $validate = \Validator::make($params_array,[
            'inv_nombre'=>'required',
            'inv_apellPater'=>'required',
            'inv_apellMater'=>'required',
            'inv_cedula'=>'required',
            'inv_correo'=>'required',
            'inv_telefono'=>'required',
            'fk_ciu_codigo'=>'required',
            'fk_ent_codigo'=>'required'
        ]);

        if($validate->fails()){

            return response()->json($validate->errors(),400);
        }
           

        $investigador = new T_investigador();
        $investigador ->inv_nombre = $params->inv_nombre;
        $investigador ->inv_apellPater = $params ->inv_apellPater;
        $investigador ->inv_apellMater = $params ->inv_apellMater;
        $investigador ->inv_cedula = $params ->inv_cedula;
        $investigador ->inv_correo = $params ->inv_correo;
        $investigador ->inv_telefono = $params ->inv_telefono;
        $investigador ->fk_ciu_codigo = $params ->fk_ciu_codigo;
        $investigador ->fk_ent_codigo = $params ->fk_ent_codigo;

        $investigador->save();

        $mensaje = "Se agrego el investigador";

        $respuesta = response::json([
            'messaje' => $mensaje,
            'data' => $investigador
        ],201);

         return $respuesta; 
              
    }

    public function update (Request $request , $id){
        $investigador = T_investigador::findOrFail($id);
        $investigador->update($request->all());
    }
}
