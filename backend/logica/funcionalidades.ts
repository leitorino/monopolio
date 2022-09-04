import { randomInt } from "crypto";

class funcionalidades{

    turno: number;

    constructor(){
        this.turno = 0;
    }
    
    tirarDado(){
        return randomInt(1, 6);
    }

    onCarcel(){
        if(this.turno > 3){
            this.turno = 0;
            return false;
        }else{
            this.turno++;
            return true;
        }
    }

}

module.exports = funcionalidades;