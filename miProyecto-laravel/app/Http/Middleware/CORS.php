<?php

namespace App\Http\Middleware;

//clase de conexion con los heaedr para la autenticacion
use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        header('Access-Control-Allow-Origin : *');
        header('Access-Control-Allow-Headers : Content-type, X-Auth-Token, Authorization, Origin, X-Requested-With, Accept, application/json');
        header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');        
        return $next($request);
    }
}

// header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');