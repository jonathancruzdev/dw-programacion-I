let PersonaA = {
    Nombre: 'John',
    Apellido: 'Do',
    Presentarse: function () {
        console.log(`Mi nombres es ${this.Nombre} ${this.Apellido}`);
    }
}

// Creo el objeto PersonaB:
let PersonaB = {
    Nombre: 'Juanito',
    Apellido: 'Perez',
    Presentarse: function () {
        console.log(`Mi nombres es ${this.Nombre} ${this.Apellido}`);
    }
}

// Ejecuto los métodos:
PersonaA.Presentarse();
PersonaB.Presentarse();