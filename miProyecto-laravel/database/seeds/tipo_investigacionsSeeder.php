<?php

use Illuminate\Database\Seeder;

class tipo_investigacionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('t_tipo_investigacions')->insert([
            'inv_nombre' => 'Investigación científica',
            'inv_descrip' => 'Este tipo de investigaciones
            se caracterizan por
            evidenciar un gran vacío en
            el conocimiento a nivel
            mundial sobre la
            problemática objeto de
            estudio, lo que conlleva a
            realizar este tipo de
            proyectos para construir una
            base conceptual que
            permita el avance de la
            ciencia en esta temática'
        ]);
        DB::table('t_tipo_investigacions')->insert([
            'inv_nombre' => 'Desarrollo Tecnológico',
            'inv_descrip' => 'Los proyectos de desarrollo
            tecnológico realizan
            validaciones de las
            soluciones a nivel prototipo y piloto, antes de realizar un
            escalamiento a nivel
            industrial, su objetivo es
            reducir la incertidumbre
            generada de las soluciones
            teóricas planteadas.'
        ]);
        DB::table('t_tipo_investigacions')->insert([
            'inv_nombre' => 'Innovación',
            'inv_descrip' => 'Introduce productos o
            servicios nuevos o
            significativamente
            mejorados para el sector.'
        ]);
    }
}
