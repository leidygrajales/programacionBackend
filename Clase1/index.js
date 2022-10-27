class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return console.log(this.mascotas.length)
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor })
    }

    getBookNames() {
        const bookNames = []
        this.libros.forEach(libro => {
            bookNames.push(libro.nombre)
        })
        return console.log(bookNames)
    }
}

const usuario1 = new Usuario(
    'Maria',
    'Perez',
    [
        { nombre: "El diablo en la botella", autor: "Robert Stevenson" }
    ],

    ["Pajaro"]

);

usuario1.getFullName()
usuario1.addMascota("Perro")
usuario1.countMascotas()
usuario1.addBook("La ley de la atraccion", "Esther y Jerry Hicks")
usuario1.getBookNames()