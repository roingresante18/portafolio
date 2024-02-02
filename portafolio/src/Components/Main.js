import React from 'react'

const Main = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-grow lg:flex-col">

                    <div>
                        <h1 className="text-3xl font-bold">hola soy Rodrigo Zarate</h1>
                        <p className="py-6"> actualmente estoy cursando la
                            carrera de Programación Web y Aplicaciones Móviles en el Instituto
                            Superior Espíritu Santo </p>
                        <button className="btn btn-primary">Contactame!!</button>
                    </div>
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <p className="py-6"> Mi enfoque se centra en la búsqueda constante de oportunidades
                        para ampliar mis conocimientos y habilidades en el ámbito de la
                        programación. Poseo un profundo interés en la exploración de
                        nuevos lenguajes de programación y estoy decidido a participar
                        activamente en proyectos relevantes que me permitan aplicar y
                        fortalecer mis habilidades técnicas. </p>


                </div>
            </div>
        </>
    )
}

export default Main
