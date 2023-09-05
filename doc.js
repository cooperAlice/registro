document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registro").addEventListener("submit", function (event) {
        event.preventDefault();

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;

        let data = {
            nombre,
            apellido,
            fechaNacimiento
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(data)

        })

            .then(response => response.json())
            .then(json => console.log('Su registro fue exitoso', json))
            .catch(err => console.log('Error en la solicitud', err))
    });
});
