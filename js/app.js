function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias')

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
}

document.addEventListener('DOMContentLoaded', iniciarApp)