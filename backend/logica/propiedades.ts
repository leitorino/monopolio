const TiposDePropiedades = ["Marron", "AzulClaro", "Fucsia", "Naranja", "Rojo", "Amarillo", "Verde", "Azul", "Servicio", "Ferrocarril"];
type TiposDePropiedades = "Marron" | "AzulClaro" | "Fucsia" | "Naranja" | "Rojo" | "Amarillo" | "Verde" | "Azul" | "Servicio" | "Ferrocarril";

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
        this.checkTipoPropiedad();
        if(this.casa < 4){
            this.casa++;
        }
    };

    sellCasa(cant: number){
        this.checkTipoPropiedad();
        if(cant > 0 && cant <= this.casa){
            this.casa = this.casa - cant;
        }
    }

    getCasas(){
        this.checkTipoPropiedad();
        return this.casa;
    };

    setHotel(){
        this.checkTipoPropiedad();
        if (this.casa === 4) {
          this.casa = 0;
          this.hotel = true;
        }else if(this.casa < 4){
          this.hotel = false;
        }
      };

    getHotel(){
        this.checkTipoPropiedad();
        return this.hotel;
    };

    setPrecioCasa(newPrecioCasa : number){
        this.checkTipoPropiedad();
        this.precioCasa = newPrecioCasa;
    };

    getPrecioCasa(){
        this.checkTipoPropiedad();
        return this.precioCasa;
    };

    setPrecioHotel(newPrecioHotel : number){
        this.checkTipoPropiedad();
        this.precioHotel = newPrecioHotel;
    };

    getPrecioHotel(){
        this.checkTipoPropiedad();
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
    
    checkTipoPropiedad(){
        if(this.tipoDePropiedad === "Servicio" || this.tipoDePropiedad === "Ferrocarril"){
            return process.exit();
        }
    }
    
}

module.exports = propiedades;


