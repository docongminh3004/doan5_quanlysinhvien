using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using project5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LichthisController : ControllerBase
    {

        private readonly qlsinhvienContext _context;

        public LichthisController(qlsinhvienContext context)
        {
            _context = context;
        }
        // GET: api/<LichthisController>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lichthi>>> GetLichthi()
        {
            var rs = from t1 in _context.Lichthis
                     join t2 in _context.Hocphans on t1.Mahp equals t2.Mahp
                     select new
                     {
                         t1.Mahp,
                         t1.Id,
                         t1.Malop,
                         t1.Ngaythi,
                         t1.Phongthi,
                         t2.Tenhp
                     };

            return Ok(await rs.ToListAsync());
        }

        // GET api/<LichthisController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lichthi>> GetLichthi(long id)
        {
            var Lichthi = await _context.Lichthis.FindAsync(id);

            if (Lichthi == null)
            {
                return NotFound();
            }

            return Lichthi;
        }
        //ktra mã trùng
        private bool LichthiExists(long id)
        {
            return _context.Lichthis.Any(e => e.Id == id);
        }
        // POST api/<LichthisController>
        [HttpPost]
        public async Task<ActionResult<Lichthi>> PostLichthi(Lichthi Lichthi)
        {
           
           

                _context.Lichthis.Add(Lichthi);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            
            return new JsonResult("Đã thêm thành công .");
        }

        // PUT api/<LichthisController>/5
        [HttpPut("{id}")]
        public JsonResult PutLichthi(long id, Lichthi Lichthi)
        {


            _context.Entry(Lichthi).State = EntityState.Modified;
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return new JsonResult("Update thành công.");
        }

        // DELETE api/<LichthisController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lichthi>> DeleteLichthi(long id)
        {
            var Lichthi = await _context.Lichthis.FindAsync(id);
            if (Lichthi == null)
            {
                return NotFound();
            }
            _context.Lichthis.Remove(Lichthi);
            await _context.SaveChangesAsync();
            return Lichthi;
        }
        [Route("getlophoc")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lophoc>>> Getlop()
        {
            return await _context.Lophocs.ToListAsync();
        }
        [Route("gethocphan")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hocphan>>> geyhocphan()
        {
            return await _context.Hocphans.ToListAsync();
        }
    }
}
