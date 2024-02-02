import React from 'react'

const Nav = () => {
    return (
        <>
            <div className="navbar fixed  p-1 btn btn-ghost">
                <div className="flex-1 ">
                    <a className="text-xl ml-64">Portafolio</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Sobre mi</a></li>
                        <li><a>Experiencias</a></li>
                        <li><a>Proyectos</a></li>
                        <li><a>Contacto</a></li>
                        {/* <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        // </li> */}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Nav
