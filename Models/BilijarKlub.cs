using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    [Table("BilijarKlub")]
    public class BilijarKlub
    {
        
        [Key]
        public int ID {get; set;}

        [MaxLength(50)] 
        public string Naziv {get; set;}

        [MaxLength(50)]
        public string Lokacija {get; set;}

        [Range(5, 20)]
        public int BrojStolova {get; set;}

        public int MaxLjudiZaStolom {get; set;}

        public int MaxLokala {get; set;} 



        public  List<Sto> Stolovi{get;set;}
        public  List<Narudzbina> Narudzbine{get;set;}
    }
}