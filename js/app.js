function iniciarApp() {

    obtenerategorias()

    function obtenerategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(resultado => {
                console.log(resultado)
            })
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp)