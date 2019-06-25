<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        // $this->call(departamentosSeeder::class);
        // $this->call(ciudadesSeeder::class);
        // $this->call(entidadesSeeder::class);
        // $this->call(areasSeeder::class);
        //  $this->call(categoriasSeeder::class);
         $this->call(tipo_investigacionsSeeder::class);
    }
}
