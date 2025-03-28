/*Ejercicio 2: "Gestor de Contactos"
Implementa un programa que gestione una lista de contactos.
El programa debe:
- Crear una función que reciba un array de contactos
- Cada contacto debe tener: nombre, teléfono, email, edad
- Ordenar los contactos por edad
- Agrupar los contactos por rango de edad (18-25, 26-35, etc.)
- Mostrar los grupos formados
*/

const contactos = [
    { nombre: "Ana", telefono: "123-456", email: "ana@email.com", edad: 25 },
    { nombre: "Juan", telefono: "789-012", email: "juan@email.com", edad: 30 },
    { nombre: "Luis", telefono: "345-678", email: "luis@email.com", edad: 40 },
    { nombre: "Marta", telefono: "901-234", email: "marta@email.com", edad: 55 },
    { nombre: "Carlos", telefono: "567-890", email: "carlos@email.com", edad: 65 }
];

function gestionarContactos(contactos) {
    contactos.sort((a, b) => a.edad - b.edad);

    const rangos = {
        "18-25": [],
        "26-35": [],
        "36-45": [],
        "46-60": [],
        "60+": []
    };

    contactos.forEach(contacto => {
        if (contacto.edad >= 18 && contacto.edad <= 25) {
            rangos["18-25"].push(contacto);
        } else if (contacto.edad >= 26 && contacto.edad <= 35) {
            rangos["26-35"].push(contacto);
        } else if (contacto.edad >= 36 && contacto.edad <= 45) {
            rangos["36-45"].push(contacto);
        } else if (contacto.edad >= 46 && contacto.edad <= 60) {
            rangos["46-60"].push(contacto);
        } else {
            rangos["60+"].push(contacto);
        }
    });

    console.log("Contactos agrupados por edad:");
    for (const rango in rangos) {
        console.log(`${rango}:`, rangos[rango]);
    }
}

gestionarContactos(contactos);