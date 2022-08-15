const TiposDePropiedades = ["Marron", "AzulClaro", "Fucsia", "Naranja", "Rojo", "Amarillo", "Verde", "Azul"];
type TiposDePropiedades = "Marron" | "AzulClaro" | "Fucsia" | "Naranja" | "Rojo" | "Amarillo" | "Verde" | "Azul";

class propiedades{
    tipoDePropiedad: String;
    precio: Number;
    casa: Number;
    hotel: Boolean;
    hipoteca: Number;
    alquiler: Number;
    
    constructor(){
        this.tipoDePropiedad = "";
        this.precio = 0;
        this.casa = 0;
        this.hotel = false;
        this.hipoteca = 0;
        this.alquiler = 0;
    }

    setTipoDePropiedad(newTipoDePropiedad : TiposDePropiedades){
        this.tipoDePropiedad = newTipoDePropiedad;
    };

    getTipoDePropiedad(){
        return this.tipoDePropiedad;
    };

    setPrecio(newPrecio : number){
        this.precio = newPrecio;
    };

    getPrecio(){
        return this.precio;
    };

    setCasa(newCasa : number){
        this.casa = newCasa;
    };

    getCasa(){
        return this.casa;
    };

    setHotel(){
        if (this.casa === 4) {
          this.casa = 0;
          this.hotel = true;
        }else if(this.casa < 4){
          this.hotel = false;
  
        }
          
      };

    getHotel(){
        return this.hotel;
    };

    setHipoteca(newHipoteca : number){
        this.hipoteca = newHipoteca;
    };

    getHipoteca(){
        return this.hipoteca;
    };

    setAlquiler(newAlquiler : number){
        this.alquiler = newAlquiler;
    };

    getAlquiler(){
        return this.alquiler;
    };




    
    
}

module.exports = propiedades;


