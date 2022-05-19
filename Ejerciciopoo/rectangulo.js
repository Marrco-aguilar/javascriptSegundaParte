console.log ('ejercicio de POO');

class rectangulo{
   // base = 0;
   //// alture = 0;

    constructor(base, alture){
        this.base = base;
        this.alture = alture;
        console.log('Desde el metodo constructor');

    }

    area(){
        console.log('Calcualr el area');
        this.perimetro();
        return this.base + this.alture
        
    }
    perimetro(){
        console.log('Calcula el perimetro')
        return (this.base * 2) + (this.alture * 2)
    }
}

let rectanguloUno = new rectangulo(5, 10);
//rectanguloUno.alture = 5;
//rectanguloUno.base = 7;
console.log(rectanguloUno.area());

//console.log(rectanguloUno.perimetro());
document.getElementById("respuesta").innerHTML = rectanguloUno.area();