import {Sto} from "./sto.js";
import { Narudzbina } from "./narudzbina.js";

export class BilijarKlub {
    constructor(id, naziv, lokacija, brojstolova, maxljudi, maxlokala){
        this.id = id;
        if (naziv) {
            this.naziv=naziv;
        }
        else {
            this.naziv = "Default";
        }

        if (lokacija) {
            this.lokacija = lokacija;
        }
        else {
            this.lokacija = "Default";
        }
        
        if (brojstolova) {
            this.brojstolova = brojstolova;
        }
        else {
            this.brojstolova = 12;
        }

        if (maxljudi) {
            this.maxljudi = maxljudi;
        }
        else {
            this.maxljudi = 5;
        }

        if (maxlokala) {
            this.maxlokala = maxlokala;
        }
        else {
            this.maxlokala = 2;
        }

        this.stolovi=[];
        this.narudzbine=[];
        
        this.container=null;
        

    }

    dodajSto(sto){
        this.stolovi.push(sto);
    
    }

    dodajNarudzbinu(narudzbina){
        this.narudzbine.push(narudzbina);
    }


    crtajBilijarKlub(host){

        if(!host)
          throw new Exception("Ne postoji roditeljski element.");

        this.container=document.createElement("div");
        this.container.classList.add("contbk");
        host.appendChild(this.container);

        let imeBK=document.createElement("h1");
        imeBK.className="imeBK";
        imeBK.innerHTML= this.naziv;
        this.container.appendChild(imeBK);


        let divZaCrtanje=document.createElement("div");
        divZaCrtanje.className="divZC";
        
        

        let btn=document.createElement("button");
        btn.className="btnUcitaj";
        btn.innerHTML="Prikazi bilijar klub";
        this.container.appendChild(btn);
       
    
       var brojac = 0;

        btn.addEventListener("click",()=>
        {
            brojac+=1;
           var btn=this.container.querySelector(".btnUcitaj");
           if(brojac>=this.maxlokala){
               btn.disabled=true;
               alert("Vec postoji maksimalan broj ovog lokala.")

           }
           else{
                  
               this.crtajFormu(this.container.appendChild(divZaCrtanje));
               this.crtajStolove(this.container.appendChild(divZaCrtanje));

           }
        });
    
    }

    crtajFormu(host){
        
        //Unos za stolove
        var forminjo =document.createElement("div");
        forminjo.className = "forminjo"
        host.appendChild(forminjo);
          
        var formica1 = document.createElement("div");
        formica1.className = "formica1";  
        forminjo.appendChild(formica1);
        
        var rezervacija = document.createElement("h3");
        rezervacija.innerHTML = "Rezervisite sto";
        rezervacija.className = "rezervacija";  
        formica1.appendChild(rezervacija);

        var labela = document.createElement("label");
        labela.innerHTML = "Broj stola"
        labela.className = "labele";  
        formica1.appendChild(labela);
        let input = document.createElement("input");
        input.className= "brStola"; 
        input.type="number";  
        formica1.appendChild(input);

         labela = document.createElement("label");
         labela.innerHTML = "Ime"
         labela.className = "labele";  
         formica1.appendChild(labela);
 
         input = document.createElement("input");
         input.className = "ime";  
         formica1.appendChild(input);
 
         labela = document.createElement("label");
         labela.innerHTML = "Prezime"
         labela.className = "labele";  
         formica1.appendChild(labela);
 
         input = document.createElement("input");
         input.className = "prezime";   
         formica1.appendChild(input);

         labela = document.createElement("label");
         labela.innerHTML = "Za koliko ljudi se rezervise?"
         labela.className = "labele";  
         formica1.appendChild(labela);
         input = document.createElement("input");
         input.className= "brRezervacija"; 
         input.type="number";  
         formica1.appendChild(input);

         //Forma za narudzbine

         var formica2 = document.createElement("div");
         forminjo.appendChild(formica2);
         formica2.className = "formica1";   

          let naslovNarudzbina = document.createElement("h3");
          naslovNarudzbina.innerHTML = "Da li zelite da nesto narucite?";
          naslovNarudzbina.className = "rezervacija";    
          formica2.appendChild(naslovNarudzbina);

          labela = document.createElement("label");
          labela.innerHTML = "Broj stola"
          labela.className = "labele"; 
          formica2.appendChild(labela);
  
          input = document.createElement("input");
          input.className= "brojStola1";  
          input.type="number"; 
          formica2.appendChild(input);
          
          let sokovi = ["", "Spire", "Fanta", "Cocta", "Coca Cola", "Pepsi", "Limunada", "Nektar jagoda"];
          let piva = ["","Tuborg", "Zajecarsko", "Carlsberg", "Heineken" ,"Carsko"];
         
  
          let selectSokovi= document.createElement("select");
          selectSokovi.className = "optSok";
          labela = document.createElement("label");
          labela.innerHTML="Sokovi";
          labela.className = "labele"
          formica2.appendChild(labela);
          formica2.appendChild(selectSokovi);
  
          for(let i=0; i<8;i++){
              let optionSokovi=document.createElement("option");
              
              optionSokovi.innerHTML=sokovi[i];
              optionSokovi.value=sokovi[i];
              selectSokovi.appendChild(optionSokovi);
          }
  


          let selectPiva= document.createElement("select");
          selectPiva.className = "optPivo";
          labela = document.createElement("label");
          labela.innerHTML="Piva";
          labela.className = "labele"
          formica2.appendChild(labela);
          formica2.appendChild(selectPiva);
  
          for(let i=0; i<6;i++){
              let optionPiva=document.createElement("option");
              optionPiva.innerHTML=piva[i];
              optionPiva.value=piva[i];
              selectPiva.appendChild(optionPiva);
          }

          let btn=document.createElement("buttton");
          btn.innerHTML="Rezervisi sto";
          btn.className="btns";
          formica1.appendChild(btn);

          btn.onclick=(ev)=>{
              

            const ime = this.container.querySelector(".ime");
            console.log(ime);

            const prezime = this.container.querySelector(".prezime");
            console.log(prezime);

            const brojStola = this.container.querySelector(".brStola");
            console.log(brojStola);

            const brojLjudi = this.container.querySelector(".brRezervacija");
            console.log(brojLjudi);

            if(brojStola.value>=this.brojstolova)
             
              alert("Ne postoji sto sa tim brojem.");
            else if (brojLjudi.value>this.maxljudi) {
              alert("Maksimalan broj ljudi za ovim stolom je: "+ this.maxljudi);
                
            }else {
               
                console.log(brojStola.value);
                console.log(brojLjudi.value);
                console.log(ime.value);
                console.log(prezime.value);

                fetch("https://localhost:5001/Sto/RezervisiSto/"+this.id,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        brojStola:brojStola.value,
                        stanje:"zauzet",
                        kapacitetStola:brojLjudi.value,
                        ime:ime.value,
                        prezime:prezime.value


                    })
                }).then(p=>{
                    if(p.ok)
                    {
                        console.log(this.stolovi[brojStola.value]);
                        this.stolovi[brojStola.value].zauzmiSto(brojStola.value,brojLjudi.value);
                        this.stolovi[brojStola.value].kliknuto(brojStola.value,ime.value,prezime.value);
                        
                    }
                    else if(p.status==406){
                        alert("Sto je rezervisan!");
                    }
                })

            }
       }

          btn=document.createElement("buttton");
          btn.innerHTML="Oslobodi sto";
          btn.className="btns";
          formica1.appendChild(btn);
          btn.onclick=(ev)=>{
            const ime=this.container.querySelector(".ime");
            console.log(ime);

            const prezime=this.container.querySelector(".prezime");
            console.log(prezime);

            const brojStola= this.container.querySelector(".brStola").value;
            console.log(brojStola);

            const brojLjudi=this.container.querySelector(".brRezervacija");
            console.log(brojLjudi);

            console.log(brojStola.value);
            console.log(brojLjudi.value);
            console.log(ime.value);
            console.log(prezime.value);

            fetch("https://localhost:5001/Sto/OslobodiSto/"+ brojStola + "/"+ this.id,{
                method:"DELETE"
            }).then(resp=>{
                if(resp.ok){
                   
                    this.stolovi[brojStola].oslobodiSto(brojStola);
                    alert("Sto je sada slobodan!");
                }
            }).catch(err=>{
                console.log(err);
            });
            this.container.querySelector(".brStola").value= " ";
            this.container.querySelector(".ime").value= " ";
            this.container.querySelector(".prezime").value= " ";
            this.container.querySelector(".brRezervacija").value= " ";
        }

         btn=document.createElement("buttton");
         btn.innerHTML="Promenite rezervaciju";
         btn.className="btns";
         formica1.appendChild(btn);
         btn.onclick=(ev)=>{

            const ime=this.container.querySelector(".ime").value;
            console.log(ime);

            const prezime=this.container.querySelector(".prezime").value;
            console.log(prezime);

            const brojStola= this.container.querySelector(".brStola").value;
            console.log(brojStola);

            const brojLjudi=this.container.querySelector(".brRezervacija").value;
            console.log(brojLjudi);


            fetch("https://localhost:5001/Sto/IzmeniSto/"+brojStola + "/" + ime + "/" + prezime + "/" + brojLjudi,{
                method: "PUT"
            }).then(resp=>{
                if(resp.ok){
                   
                    this.stolovi[brojStola].izmeniSto(brojStola,brojLjudi,ime,prezime);
                    alert("Izmena uspešna!");                }
            }).catch(err=>{
                console.log(err);
            });
            
        }
          btn=document.createElement("buttton");
          btn.innerHTML="Naruci";
          btn.className="btns";
          formica2.appendChild(btn);
          btn.onclick=(ev)=>{

            const br = this.container.querySelector(".brojStola1").value;               
            console.log(br);

            const pivaa = selectPiva.value;       
            console.log(pivaa);

            const sokovia = selectSokovi.value;
            console.log(sokovia);

            let narudzbinaa= new Narudzbina(br,pivaa,sokovia);

            if(br>this.brojstolova)
              alert("Ne postoji sto sa tim rednim brojem! Izaberite neki drugi sto!");
            else{
                
                fetch("https://localhost:5001/Narudzbina/DodajNarudzbinu/"+ this.id,{
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id:br.value,
                        sokovi:sokovia,
                        piva:pivaa 
                    })
                }).then(p=>{
                    if(p.ok)
                    {
                        this.stolovi[br].naruciSaStola(br,narudzbinaa);

                    }
                })
            } 
            this.container.querySelector(".brojStola1").value= " ";
            selectPiva.value=" ";
            selectSokovi.value=" ";
         
        }

    }

    crtajStolove(host){
        const stolovi = document.createElement("div");
        stolovi.className="crtaniStolovi";
        this.container.querySelector(".divZC").appendChild(stolovi);


            fetch("https://localhost:5001/Sto/PreuzmiStolove").then(p=>{
             p.json().then(data=>{
            var niz = [];
            var brel =0;
            data.forEach(sto=>{
            
            const sto1=new Sto(sto.brojstola, sto.stanje, sto.maxbrojljudi, sto.ime, sto.prezime);
            
            console.log(sto.brojstola);
           
                    niz[brel++]=sto.brojstola;
                    this.dodajSto(sto1);
                    sto1.crtajSto1(stolovi);

            });
            for(let i =0;i<this.brojstolova;i++)
            {
                var zauzet = false;
                for(var j =0;j<brel;j++)
                {
                    if(i==niz[j])
                    {
                        zauzet= true;
                        break;
                    }
                }
                if(zauzet == false)
                {
                    const sto1 = new Sto(i,"slobodan", 5, " ", " ");
                    this.dodajSto(sto1);
                    sto1.crtajSto(stolovi);

                }
            }

        });
    });
    
    }
}