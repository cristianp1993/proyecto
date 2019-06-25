<?php

use Illuminate\Database\Seeder;

class ciudadesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('t_ciudades')->insert([
        //     'ciu_nombre' => 'Bogota',
        //     'fk_dep_codigo' => 1
        // ]);
        // DB::table('t_ciudades')->insert([
        //     'ciu_nombre' => 'Cali',
        //     'fk_dep_codigo' => 28
        // ]);
        // DB::table('t_ciudades')->insert([
        //     'ciu_nombre' => 'Barranquilla',
        //     'fk_dep_codigo' => 4
        // ]);
        // DB::table('t_ciudades')->insert([
        //     'ciu_nombre' => 'Cartagena',
        //     'fk_dep_codigo' => 5
        // ]);
        // DB::table('t_ciudades')->insert([
        //     'ciu_nombre' => 'Pasto',
        //     'fk_dep_codigo' => 15
        // ]);
        DB::table('t_ciudades')->insert([
            'ciu_nombre' => 'Manizales',
            'fk_dep_codigo' => 31
        ]);


    }
}
