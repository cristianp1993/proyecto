<?php

Route::group([
    'middleware' => 'api',
], function () {
    //Rutas de autenticacion de la api JWT
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
});

route::group(['middleware' => 'CORS'],function(){
    // ruta de las ciudades
    Route::get('ciudades-index','ciudadesController@index');

    // Rutas investigador
    Route::post('store', 'investigadorController@store');
    Route::get('investigador-index','investigadorController@index');

    // rutas entidades
    Route::get('entidades-index','entidadesController@index');

    // rutas proyectos
    Route::get('proyecto-index','proyectoController@index');
    Route::post('guardarProyecto', 'ProyectoController@guardarProyecto');
    
});



