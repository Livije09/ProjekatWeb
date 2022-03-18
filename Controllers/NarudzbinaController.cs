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
    public class NarudzbinaController : ControllerBase{
        public BilijarKlubContext Context;
        public NarudzbinaController(BilijarKlubContext context){
            Context = context;
        }

        [Route("DodajNarudzbinu/{id}")]
        [HttpPost]
        public async Task DodajNarudzbinu(int id, [FromBody]Narudzbina narudzbinA)
        {
            var bilijarKLub = await Context.BilijarKlubovi.FindAsync(id);
            if (bilijarKLub != null) {
                narudzbinA.BilijarKlub = bilijarKLub;
                Context.Narudzbine.Add(narudzbinA);
                await Context.SaveChangesAsync();
            }
            else {
                BadRequest ("Ne postoji bilijar klub sa tim ID-em.");
            }
            
        }
    }
}