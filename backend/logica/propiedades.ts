const TiposDePropiedades = ["Marron", "AzulClaro", "Fucsia", "Naranja", "Rojo", "Amarillo", "Verde", "Azul"];
type TiposDePropiedades = "Marron" | "AzulClaro" | "Fucsia" | "Naranja" | "Rojo" | "Amarillo" | "Verde" | "Azul";

class propiedades{
    tipoDePropiedad: string;
    precio: number;
    casa: number;
    hotel: boolean;
    hipoteca: number;
    alquiler: number;
    precioCasa: number;
    precioHotel: number;
    
    constructor(){
        this.tipoDePropiedad = "";
        this.precio = 0;
        this.casa = 0;
        this.hotel = false;
        this.hipoteca = 0;
        this.alquiler = 0;
        this.precioCasa = 0;
        this.precioHotel = 0;
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

    addCasa(){
        if(this.casa < 4){
            this.casa++;
        }
    };

    sellCasa(cant: number){
        if(cant > 0 && cant <= this.casa){
            this.casa = this.casa - cant;
        }
    }

    getCasas(){
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

    setPrecioCasa(newPrecioCasa : number){
        this.precioCasa = newPrecioCasa;
    };

    getPrecioCasa(){
        return this.precioCasa;
    };

    setPrecioHotel(newPrecioHotel : number){
        this.precioHotel = newPrecioHotel;
    };

    getPrecioHotel(){
        return this.precioHotel;
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


