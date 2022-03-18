using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace ProjekatBilijar.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BilijarKlubController : ControllerBase{
        public BilijarKlubContext Context;
        public BilijarKlubController(BilijarKlubContext context){
            Context = context;
        }

        [Route("PreuzmiBilijarKlub")]
        [HttpGet]
        public async Task<List<BilijarKlub>> PreuzmiBilijarKlub()
        {
            return await Context.BilijarKlubovi.Include(p=>p.Stolovi)
                                               .Include(p=>p.Narudzbine)
                                               .ToListAsync();
        }

        [Route("UpisiBilijarKlub")]
        [HttpPost]
        public async Task UpisiBilijarKlub([FromBody] BilijarKlub bilijarKLub)
        {
            if (bilijarKLub != null) {
                Context.BilijarKlubovi.Add(bilijarKLub);
                await Context.SaveChangesAsync();
            }
            else {
                BadRequest("Niste uneli nista.");
            }
            
        }

        [Route("IzmeniBilijarKlub")]
        [HttpPut]
        public async Task IzmeniBilijarKlub([FromBody] BilijarKlub bilijarKLub)
        {
            Context.BilijarKlubovi.Update(bilijarKLub);
            await Context.SaveChangesAsync();

        }

        [Route("IzbrisiBilijarKlub/{id}")]
        [HttpDelete]
        public async Task IzbrisiBilijarKlub(int id)
        {
            var bilijarKLub = await Context.BilijarKlubovi.FindAsync(id);
            if (bilijarKLub != null) {
                Context.BilijarKlubovi.Remove(bilijarKLub);
                await Context.SaveChangesAsync();
            }
            else {
                BadRequest ("Ne postoji bilijar klub sa tim ID-em.");
            }
            
        }
    }
}
