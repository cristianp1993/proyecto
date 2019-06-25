<?php

use Illuminate\Database\Seeder;

class categoriasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('t_categorias')->insert([
            'cat_nombre' => 'Cristalografía estudia los cristales',
            'area_codigo' => 1,

        ]);
        DB::table('t_categorias')->insert([
            'cat_nombre' => 'Mineralogía los minerales',
            'area_codigo' => 1,
        ]);
        DB::table('t_categorias')->insert([
            'cat_nombre' => 'Vulcanología',
            'area_codigo' => 1,
        ]);
        // DB::table('t_categorias')->insert([
        //     'cat_nombre' => 'Telecomunicaciones',
        //     'area_codigo' => 2,
        // ]);
    }
}
