import { BilijarKlub } from "./bilijarklub.js";
import { Narudzbina } from "./narudzbina.js";
import { Sto } from "./sto.js";


fetch("https://localhost:5001/BilijarKlub/PreuzmiBilijarKlub").then(p=>{
    p.json().then(q=>{
        console.log(q);
        
        q.forEach(element =>{
            
            const bilijarKlubb = new BilijarKlub(element.id, element.naziv, element.lokacija, element.brojStolova, element.maxljudi, element.maxlokala);
            console.log(element.id);
            
            
            element.stolovi.forEach((s,index)=>{
                
                bilijarKlubb.stolovi[index]=s.brojStola;
                
            }); 
            
            element.narudzbine.forEach((s,index)=>{

                bilijarKlubb.narudzbine[index]=s.brojStola;
               
            }); 

            console.log(bilijarKlubb);
            bilijarKlubb.crtajBilijarKlub(document.body);
        });
    });
});