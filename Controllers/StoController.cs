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
    public class StoController : ControllerBase{
        public BilijarKlubContext Context;
        public StoController(BilijarKlubContext context){
            Context = context;
        }

        [Route("RezervisiSto/{id}")]
        [HttpPost]
        public async Task<IActionResult>  RezervisiSto(int id, [FromBody] Sto sto)
        {
            
            var bilijarKLub = await Context.BilijarKlubovi.FindAsync(id);
            if (bilijarKLub != null) {
                sto.BilijarKlub = bilijarKLub;
            }
            else {
                BadRequest ("Ne postoji sto sa tim ID-em.");
            }

            var S = await Context.Stolovi.Where(p => p.BrojStola==sto.BrojStola && p.BilijarKlub.ID==id).FirstOrDefaultAsync();
            if(S!=null)
            {
                return BadRequest("Sto sa tim ID-em vec postoji.");

            }
            else{
                Context.Stolovi.Add(sto);
                // Context.Add(sto);
                await Context.SaveChangesAsync();
                return Ok();
            }


        }

        [Route("OslobodiSto/{br}/{id}")]
        [HttpDelete]
        public async Task OslobodiSto(int br, int id)
        {
            var S = await Context.Stolovi.Where(p => p.BrojStola==br && p.BilijarKlub.ID==id).FirstOrDefaultAsync();
            if (S != null) {
                Context.Stolovi.Remove(S);
                await Context.SaveChangesAsync();
            }
            else {
                BadRequest("Sto sa tim ID-em ne postoji.");
            }
            
        }

        [Route("IzmeniSto/{br}/{ime}/{prezime}/{trenutnibrljudi}")]
        [HttpPut]
        public async Task IzmeniSto(int br, string ime, string prezime, int trenutnibrljudi)
        {
            
            var S = await Context.Stolovi.Where(p => p.BrojStola==br).FirstOrDefaultAsync();
            if (S != null) {
                S.Ime = ime;
                S.Prezime = prezime;
                S.TrenutniBrojLjudi = trenutnibrljudi;
                await Context.SaveChangesAsync();
            }
            else {
                BadRequest("Sto sa tim ID-em ne postoji.");
            }

        }

        [Route("PreuzmiSto/{id}")]
        [HttpGet]
        public async Task<List<Sto>> PreuzmiSto(int id)
        {
            return await Context.Stolovi.Where(sto=>sto.BilijarKlub.ID==id).ToListAsync();
        }

        [Route("PreuzmiStolove")]
        [HttpGet]
        public async Task<List<Sto>> PreuzmiStolove()
        {
            return await Context.Stolovi.ToListAsync();
        }
    }
}