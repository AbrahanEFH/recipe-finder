function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias')
    selectCategorias.addEventListener('change', seleccionarCategoria)

    const resultado = document.querySelector('#resultado')

    obtenerategorias()

    function obtenerategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(resultado => {
                return mostrarCategorias(resultado.categories)
            })
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {

            const { strCategory } = categoria
            const option = document.createElement('OPTION')
            option.value = strCategory
            option.textContent = strCategory
            selectCategorias.appendChild(option)

        })
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then(response => response.json())
            .then(resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []) {
        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta

            const recetaContenedor = document.createElement('DIV')
            recetaContenedor.classList.add('col-md-4')

            const recetaCard = document.createElement('DIV')
            recetaCard.classList.add('card', 'mb-4')

            const recetaImagen = document.createElement('IMG')
            recetaImagen.classList.add('card-img-top')
            recetaImagen.alt = `Imagen de la receta ${strMeal}`
            recetaImagen.src = strMealThumb

            const recetaCardBody = document.createElement('DIV')
            recetaCardBody.classList.add('card-body')

            const recetaHeading = document.createElement('H3')
            recetaHeading.classList.add('card-title', 'mb-3')
            recetaHeading.textContent = strMeal

            const recetaButton = document.createElement('BUTTON')
            recetaButton.classList.add('btn', 'btn-danger', 'w-100')
            recetaButton.textContent = 'Ver Receta'

            // Inyectar en el codigo HTML

            recetaCard.appendChild(recetaImagen)
            recetaCard.appendChild(recetaCardBody)

            recetaCardBody.appendChild(recetaHeading)
            recetaCardBody.appendChild(recetaButton)

            recetaContenedor.appendChild(recetaCard)

            resultado.appendChild(recetaContenedor)

            console.log(recetaImagen)
        })
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)