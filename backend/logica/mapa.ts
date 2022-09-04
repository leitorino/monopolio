class mapa{
    
    maxHoteles: number;
    maxCasas: number;

    constructor(){
        this.maxHoteles = 0;
        this.maxCasas = 0;
    }

    setMaxHoteles(newMaxHoteles : number){
        this.maxHoteles = newMaxHoteles;
    };

    getMaxHoteles(){
        return this.maxHoteles;
    };

    setMaxCasas(newMaxCasas : number){
        this.maxCasas = newMaxCasas;
    };

    getMaxCasas(){
        return this.maxCasas;
    };

}

module.exports = mapa;