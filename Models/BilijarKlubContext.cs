using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class BilijarKlubContext : DbContext
    {
        public DbSet<BilijarKlub> BilijarKlubovi {get; set;}

        public DbSet<Sto> Stolovi {get; set;}

        public DbSet<Narudzbina> Narudzbine {get; set;}

        public BilijarKlubContext(DbContextOptions options):base(options)
        {
            
        }

    }
}