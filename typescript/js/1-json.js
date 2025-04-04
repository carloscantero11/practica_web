// POO
var bicicleta = {
  color: 'Rojo',
  modelo: 'BMX',
  frenos: 'Discos',
  velocidadMaxima: '60ka',
  cambiaColor: function (nuevo_color) {
    // bicicleta.color = nuevo_color
    this.color = nuevo_color;
    console.log(this);
  }
};

bicicleta.cambiaColor('Azul')
