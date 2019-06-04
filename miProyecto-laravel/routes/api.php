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

Route::resource('investigador', 'investigadorController');
//Yo lo hice asi..

// Route::middleware('api', 'cors')->group(function () {
// 	Route::post('login', 'AuthController@login');
//     Route::post('signup', 'AuthController@signup');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');
//     Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
//     Route::post('resetPassword', 'ChangePasswordController@process');
//     // Rutas de investigador
//     Route::post('store', 'investigadorController@store');
// });


