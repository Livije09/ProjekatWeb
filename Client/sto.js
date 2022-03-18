import { BilijarKlub } from "./bilijarklub.js";
import { Narudzbina } from "./narudzbina.js";

export class Sto{

    constructor(brojstola , stanje, maxbrojljudi, ime, prezime){
        if (brojstola) {
            this.brojstola = brojstola;
        }
        else {
            this.brojstola = 0;
        }
        
        if (stanje) {
            this.stanje = stanje;
        }
        else {
            this.stanje = "slobodan";
        }

        if (maxbrojljudi) {
            this.maxbrojljudi = maxbrojljudi;
        }
        else {
            this.maxbrojljudi = 5;  // max ljudi za stolom
        }   

        this.trenutnibrojljudi = 0;

        if (ime) {
            this.ime = ime;
        }
        else {
            this.ime = "Default";
        }

        if (prezime) {
            this.prezime = prezime;
        }
        else {
            this.prezime = "Default";
        }
        
        this.containerS=null;

    }


    boja(){
        if(this.stanje==="slobodan")
            return "rgb(255, 0, 0)";
        else
            return "rgb(0, 0, 255)";

    }

    crtajSto(host){
        if(!host)
           throw new Exception ("Roditeljski element ne postoji!");
        this.containerS=document.createElement("div");
        this.containerS.className="contS";
        this.containerS.innerHTML= this.brojstola + "<br>" +" slobodan";
        this.containerS.style.backgroundColor=this.boja();
        host.appendChild(this.containerS);

    }

    crtajSto1(host){
        if(!host)
           throw new Exception ("Roditeljski element ne postoji!");
        this.containerS=document.createElement("div");
        this.containerS.className="contS";
        this.containerS.innerHTML= this.brojstola + "<br>" +" zauzet";
        this.containerS.style.backgroundColor=this.boja();
        host.appendChild(this.containerS);

    }

    zauzmiSto(brstola, brljudi){
        if(this.stanje==="zauzet" || this.maxbrojljudi<=brljudi)
            alert("Sto je vec rezervisan.");
        else{
            this.brojstola=brstola;
            this.kapacitet=brljudi;
            this.stanje="zauzet";
            this.containerS.innerHTML=  this.brojstola + "<br> zauzet";
            this.containerS.style.backgroundColor=this.boja(); 
        }
    }


    oslobodiSto(brojstola){
        this.stanje="slobodan";
        this.trenutnibrojljudi=0;
        this.containerS.innerHTML=brojstola +"<br> slobodan";
        this.containerS.style.backgroundColor=this.boja();
    }

    izmeniSto(brojstola, br, ime, prezime){
        this.brojstola=brojstola;
        this.trenutnibrojljudi += parseInt(br);
        this.ime=ime;
        this.prezime=prezime;
        this.containerS.innerHTML= this.brojstola + "<br> zauzet";
    }


    naruciSaStola(brojstola,nar){
        if(this.stanje=="slobodan")
           alert("Nije moguce naruciti zato sto je sto prazan.");
        else{
            let btn=document.createElement("button");
            btn.className="btn";
            btn.innerHTML="Naruceno";
            this.containerS.appendChild(btn);
            btn.onclick=(ev)=>{
                alert("Broj narudzbine je: "+ nar.vratiID() + "\n Naruceno pivo je: "+ nar.vratiSok() + "\n Naruceni sok je: "+ nar.vratiPivo());
            }
        }   
    }

    kliknuto(brojstola, ime, prezime)
    {
        this.containerS.addEventListener("click", () => {
            confirm("Sto broj " + brojstola + " je zauzeo/la → " + ime + " " + prezime);
        });

    }

}