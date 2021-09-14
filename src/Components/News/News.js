import React from 'react'
import TitlePages from '../UI/TitlePages'
import NewsList from './NewsList'

const News = () => {

    const newsMock = [
        { id: 2, name: 'Titulo de prueba', description: 'lLorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.n' },
        { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
        { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    ];

    return (
        <div>
            <TitlePages text="Novedades" />
            <NewsList news={ newsMock } />
        </div>
    )
}

export default News
