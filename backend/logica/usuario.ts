const estados = ["bancarrota", "activo"];
type estados = "bancarrota" | "activo";
class usuario{
    estado: String;
    dinero: Number;
    posicion: Number;
    propiedades: Array<any>;

    constructor(){
        this.estado = "activo";
        this.dinero = 1500;
        this.posicion = 0;
        this.propiedades = [];
    }
    
    setEstado(newEstado: estados){
        this.estado = newEstado;
    }

    getEstado(){
        return this.estado;
    }
    
    getDinero(){
        return this.dinero;
    }

    setDinero(newDinero: number){
        this.dinero = newDinero;
    }
    
    getPosicion(){
        return this.posicion;
    }

    setPosicion(newPosicion: Number){
        this.posicion = newPosicion;
    }

    addPropiedad(newPropiedad: any){
        this.propiedades.push(newPropiedad);
    }

    deletePropiedad(propiedad: any){
        const index = this.propiedades.indexOf(propiedad);
        if (index > -1) {
            this.propiedades.splice(index, 1);
        }
    }

    getPropiedades(){
        return this.propiedades;
    }
    
}

module.exports = usuario;


