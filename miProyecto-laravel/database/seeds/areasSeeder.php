<?php

use Illuminate\Database\Seeder;

class areasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // DB::table('t_areaas')->insert([
        //     'are_nombre' => 'Geologia'
        // ]);
        DB::table('t_areas')->insert([
            'are_nombre' => 'Tecnologia'
        ]);
    }
}
