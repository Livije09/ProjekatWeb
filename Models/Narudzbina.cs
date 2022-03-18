using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Models
{
    [Table("Narudzbina")]
    public class Narudzbina
    {
        [Key]
        public int IDN {get; set;}

        [MaxLength(30)]
        public string Sokovi{get; set;}

        [MaxLength(30)]
        public string Pivo{get; set;}

        [JsonIgnore]
        public BilijarKlub BilijarKlub {get; set;}
        
    }
}