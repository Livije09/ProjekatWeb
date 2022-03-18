import { Sto } from "./sto.js";
import { BilijarKlub } from "./bilijarklub.js";

export class Narudzbina{
    constructor(id, sokovi , pivo){
        this.id=id;

        if (pivo) {
            this.pivo = pivo;
        }
        else {
            this.pivo = "Nista";
        }

        if (sokovi) {
            this.sokovi = sokovi;
        }
        else {
            this.sokovi = "Nista";
        }
        

        this.kontejnerPoruci=null;

    }

    vratiID(){
        return this.id;
    }

    vratiSok(){
        return this.sokovi;
    }

    vratiPivo(){
        return this.pivo;
    }

    izmeniNarudzbinu(sokovi, pivo)
    {
        this.pivo = pivo;
        this.sokovi= sokovi;
        alert("Izmena uspesna!");
        
    }

}