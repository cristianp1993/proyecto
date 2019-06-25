<?php

use Illuminate\Database\Seeder;

class entidadesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('t_entidades')->insert([
        //     'ent_nombre' => 'Universidad de Manizales',
        //     'ent_observ' => 'Sin observacion',
        //     'ent_tipoent' => 'Privada'
        // ]);
        DB::table('t_entidades')->insert([
            'ent_nombre' => 'Sena',
            'ent_observ' => 'Sin observacion',
            'ent_tipoent' => 'Publica'
        ]);
    }
}
