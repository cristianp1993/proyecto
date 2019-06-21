<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
// importamos el modelo
use App\T_investigador;


class investigadorController extends Controller
{
    //funciones 
    public function index(){
        // echo "Inicio de metodo";

        $investigadores = T_investigador::all();

        return response()->json(array(
            'investigador' => $investigadores,
            'status' => 'success'
        ),200);

        // $investigadores = T_investigador::all();        
        // //dd($investigadores);        

        // $respuesta = array(
        //     'mensaje' => 'Cargados exitosamente',
        //     'investigadores' => $investigadores
        // );

        // return 'casa';
    }
    
    public function show( ){                
        return $data = T_investigador::all();
    }


    public function store(Request $request){

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
                
        } else {

            $mensaje = "No se ingreso el investigador";
        }

        // return $mensaje;
        return response()->json([ 
            'messaje'  => $mensaje,
            'error' => 'No se inserto'
        ]);
        // return response()->json($investigador,200); 

    }

    public function update (Request $request , $id){
        $investigador = T_investigador::findOrFail($id);
        $investigador->update($request->all());
    }
}
