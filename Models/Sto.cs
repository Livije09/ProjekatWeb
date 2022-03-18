using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Sto")]
    public class Sto
    {
        [Key]
        public int IDS{ get; set;}

        public int BrojStola{get; set;}

        [MaxLength(10)]
        public string Stanje{ get; set;}

        public int MaxBrojLjudi{get; set;}

        public int TrenutniBrojLjudi{get; set;}

        [MaxLength(30)]
        public string Ime{get; set;}

        [MaxLength(30)]
        public string Prezime{get; set;}

        [JsonIgnore]
        public BilijarKlub BilijarKlub {get; set;}

    }
}