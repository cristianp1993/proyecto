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
    Route::post('store', 'investigadorController@store');
    Route::post('guardarProyecto', 'ProyectoController@guardarProyecto');
});



