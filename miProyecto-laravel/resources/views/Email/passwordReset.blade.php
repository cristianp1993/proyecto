@component('mail::message')
# Change password Request

Clic en el boton para cambiar la contraseña

@component('mail::button', ['url' => 'http://localhost:4200/response-reset?token='.$token])
Restablecer
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent