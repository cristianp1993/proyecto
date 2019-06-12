<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// importamos el modelo
use App\T_investigador;
use App\Http\Middleware\CORS;

class investigadorController extends Controller
{
    //funciones 
    public function index(){

        echo "Index de investigador";
    }
    
    public function show( ){                
        return $data = T_investigador::all();
    }


    public function store(Request $request){

        $hash = $resquest->handle('Authorization',null);
        $cors = new CORS();

        $checkToken =  $cors->handle($hash);

        if($checkToken){        
        
        // recoger los datos por post
        $json = $request->input('json',null);
        
        // return $json;        
        $params = json_decode($json);
        $params_array = json_decode($json, true);
        //conseguir usuario logueado
        $user = $cors->$checkToken($hash,true);
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

        // $investigador ->inv_codigo = $params-> null;
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

         
        }//fin if   
        else{

            $respuesta = array(
                'message' => 'Informacion incorrecta',
                'status' => 'error'
            );
        }  
        
        return response()->json($respuesta,200); 

    }

    public function update (Request $request , $id){
        $investigador = T_investigador::findOrFail($id);
        $investigador->update($request->all());
    }
}
