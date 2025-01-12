// Objeto con clientes para tener datos que imprimir en el caso que se necesiten
let texto = {
  "clientes": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "cedula": "123456789",
      "vehiculos": [
        {
          "placa": "ABC123",
          "numero_ticket": "TCKT001",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "María López",
      "cedula": "987654321",
      "vehiculos": [
        {
          "placa": "DEF456",
          "numero_ticket": "TCKT003",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Carlos García",
      "cedula": "456123789",
      "vehiculos": [
        {
          "placa": "GHI789",
          "numero_ticket": "TCKT004",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Roque Lagrotta",
      "cedula": "8783614",
      "vehiculos": [
        {
          "placa": "ROCK37PWR",
          "numero_ticket": "TCKT005",
          "prestamo": "Préstamo de Moto"
        }
      ]
    },
    {
      "id": 5,
      "nombre": "Giovanna Lagrotta",
      "cedula": "8783615",
      "vehiculos": [
        {
          "placa": "GIOGROTT",
          "numero_ticket": "TCKT005",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 6,
      "nombre": "Stefano Fouquet",
      "cedula": "456123721",
      "vehiculos": [
        {
          "placa": "STEFQT01",
          "numero_ticket": "TCKT006",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 7,
      "nombre": "Carlos Diaz",
      "cedula": "456123754",
      "vehiculos": [
        {
          "placa": "TH3B4TM4N",
          "numero_ticket": "TCKT007",
          "prestamo": "Préstamo de Auto"
        }
      ]
    }
  ]
};


// Aqui empieza la vaina

function buscar() {
    console.log("buscar")
    const categorias = [
        "nombre del cliente",
        "nombre del ticket del vehiculo",
        "cedula del cliente",
        "nombre del prestamo",
        "placa del vehiculo",
        "mostrar toda la información"
    ];

    let categoria = prompt("Elige una categoría:\n1. Nombre del cliente\n2. Nombre del ticket del vehiculo\n3. Cédula del cliente\n4. Nombre del préstamo\n5. Placa del vehiculo\n6. Mostrar toda la información");

    categoria = parseInt(categoria);
    if (categoria < 1 || categoria > 6 || isNaN(categoria)) {
        alert("Categoría no válida.");
        return;
    }

    if (categoria === 6) {
        mostrarTodaLaInformacion();
        return;
    }

    let informacion = prompt(`Introduce la información para buscar en "${categorias[categoria - 1]}":`);

    if (informacion === null || informacion.trim() === "") {
        alert("No se introdujo ninguna información.");
        return;
    }

    let resultados = buscarEnArray(categoria, informacion);
    
    if (resultados.length > 0) {
        alert(`Resultados encontrados:\n${resultados.join('\n')}`);
    } else {
        alert("No se encontraron resultados.");
    }
}

function buscarEnArray(categoria, informacion) {
    let resultados = [];
    texto.clientes.forEach(cliente => {
        switch(categoria) {
            case 1:
                if (cliente.nombre.toLowerCase() === informacion.toLowerCase()) {
                    resultados.push(JSON.stringify(cliente, null, 2));
                }
                break;
            case 2:
                cliente.vehiculos.forEach(vehiculo => {
                    if (vehiculo.numero_ticket.toLowerCase() === informacion.toLowerCase()) {
                        resultados.push(JSON.stringify(vehiculo, null, 2));
                    }
                });
                break;
            case 3:
                if (cliente.cedula === informacion) {
                    resultados.push(JSON.stringify(cliente, null, 2));
                }
                break;
            case 4:
                cliente.vehiculos.forEach(vehiculo => {
                    if (vehiculo.prestamo.toLowerCase() === informacion.toLowerCase()) {
                        resultados.push(JSON.stringify(vehiculo, null, 2));
                    }
                });
                break;
            case 5:
                cliente.vehiculos.forEach(vehiculo => {
                    if (vehiculo.placa.toLowerCase() === informacion.toLowerCase()) {
                        resultados.push(JSON.stringify(vehiculo, null, 2));
                    }
                });
                break;
        }
    });
    return resultados;
}

function mostrarTodaLaInformacion() {
    let todaLaInformacion = texto.clientes.map(cliente => JSON.stringify(cliente, null, 2)).join('\n\n');
    alert(`Toda la información:\n${todaLaInformacion}`);
}

function agregarDeudor() {
    let nombre = prompt("Introduce el nombre del cliente:");
    if (nombre === null || nombre.trim() === "") {
        alert("Nombre no válido.");
        return;
    }

    let cedula = prompt("Introduce la cédula del cliente:");
    if (cedula === null || cedula.trim() === "") {
        alert("Cédula no válida.");
        return;
    }

    let placa = prompt("Introduce la placa del vehiculo:");
    if (placa === null || placa.trim() === "") {
        alert("Placa no válida.");
        return;
    }

    let numero_ticket = prompt("Introduce el número del ticket del vehiculo:");
    if (numero_ticket === null || numero_ticket.trim() === "") {
        alert("Número del ticket no válido.");
        return;
    }

    let prestamo = prompt("Introduce el nombre del préstamo:");
    if (prestamo === null || prestamo.trim() === "") {
        alert("Nombre del préstamo no válido.");
        return;
    }

    // Crear nuevo deudor
    let nuevoDeudor = {
        id: texto.clientes.length + 1,
        nombre: nombre,
        cedula: cedula,
        vehiculos: [
            {
                placa: placa,
                numero_ticket: numero_ticket,
                prestamo: prestamo
            }
        ]
    };

    // Agregar nuevo deudor al array
    texto.clientes.push(nuevoDeudor);
    alert("Deudor agregado exitosamente.");

    // Obtener el último cliente agregado
    const ultimoCliente = texto.clientes[texto.clientes.length - 1];

     // Mostrar la información del último cliente en la consola
     console.log("ultima información agregada exitosamente");
     console.log("Nombre: " + ultimoCliente.nombre);
     console.log("Cedula: " + ultimoCliente.cedula);
     ultimoCliente.vehiculos.forEach((vehiculo, index) => {
        console.log(`Vehículo ${index + 1}`);
        console.log("Placa: " + vehiculo.placa);
        console.log("Numero de Ticket: " + vehiculo.numero_ticket);
        console.log("Prestamo: " + vehiculo.prestamo);
    
    
    });
}
// función que se dispara al hacer click en control
// Por ahora deshabilitemosla ya que aun no tenemos los conocimientos necesarios
function controlFunc(){
    alert("Esta función no esta habilitada por el momento, vuelva mas tarde");
}



// Esto muestra la lista en html pero esta deshabilitada al momento
function MostrarListaBuscada() {
  if (texto.clientes.length !== 0) {
    let contenedorTabla = document.getElementById('contenedorTabla');
    let i = 0;
    let html = `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cedula</th>
          <th scope="col">Placa</th>
          <th scope="col">Ticket</th>
          <th scope="col">Tipo</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>`;

    while (i < texto.clientes.length) {
      let cliente = texto.clientes[i];
      html += `
        <tr class="animate__fadeInDown" style="transition-delay: 1s transition: all 1s; transition-delay: 1s;"">
          <th scope="row">${cliente.id}</th>
          <td>${cliente.nombre}</td>
          <td>${cliente.cedula}</td>
          <td>${cliente.vehiculos[0].placa}</td>
          <td>${cliente.vehiculos[0].numero_ticket}</td>
          <td>${cliente.vehiculos[0].prestamo}</td>
          <td><a href="#" disabled>Ver</a>/<a href="#" disabled>Editar</a></td>
        </tr>`;
      i++;
    }

    html += `</tbody></table>`;
    contenedorTabla.innerHTML = html;
  } else {
    console.log("No hay deudores");
    alert("No hay deudores");
  }}

// Botón que agrega un nuevo cliente
agregarButton = document.getElementById("agregaDeudorButton");
agregarButton.addEventListener("click", function(event){
    agregarDeudor(event);

});
//botón para buscar por categoría
buscarButton = document.getElementById("buscarNavButton");
buscarButton.addEventListener("click",buscar);
//botón para buscar por categoría
searchButtonForm = document.getElementById("buscarButtonForm");
searchButtonForm.addEventListener("click", function(event){
    buscar(event);
   // MostrarListaBuscada(event);

});

controlButton = document.getElementById("controlButtonId");
controlButton.addEventListener("click", controlFunc);