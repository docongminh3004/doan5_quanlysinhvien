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
    public class LichhocsController : ControllerBase
    {
        private readonly qlsinhvienContext _context;

        public LichhocsController(qlsinhvienContext context)
        {
            _context = context;
        }
        // GET: api/<LichhocsController>

        [HttpGet]
        public IActionResult GetLichhoc()
        {
            var rs = from t1 in _context.Lichhocs
                     join t2 in _context.Hocphans on t1.Mahp equals t2.Mahp
                     select new
                     {
                         t1.Mahp,
                         t1.Id,
                         t1.Malop,
                         t1.Ngayhoc,
                         t1.Phonghoc,
                         t1.Giaovien,
                         t1.Tiethoc,t1.Buoihoc,
                         t2.Tenhp
                     };

            return Ok(rs.ToList());
        }

        // GET api/<LichhocsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lichhoc>> GetLichhoc(long id)
        {
            var Lichhoc = await _context.Lichhocs.FindAsync(id);

            if (Lichhoc == null)
            {
                return NotFound();
            }

            return Lichhoc;
        }
        //ktra mã trùng
        private bool LichhocExists(long id)
        {
            return _context.Lichhocs.Any(e => e.Id == id);
        }
        // POST api/<LichhocsController>
        [HttpPost]
        public async Task<ActionResult<Lichhoc>> PostLichhoc(Lichhoc Lichhoc)
        {
            if (LichhocExists(Lichhoc.Id))
            {
                return new JsonResult("Mã lớp đã bị trùng vui lòng nhập lại .");
                //   return Conflict("");
            }
            else
            {
               
             
                _context.Lichhocs.Add(Lichhoc);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            return new JsonResult("Đã thêm thành công .");
        }

        // PUT api/<LichhocsController>/5
        [HttpPut("{id}")]
        public JsonResult PutLichhoc(long id, Lichhoc Lichhoc)
        {
            
            
            _context.Entry(Lichhoc).State = EntityState.Modified;
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

        // DELETE api/<LichhocsController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lichhoc>> DeleteLichhoc(long id)
        {
            var Lichhoc = await _context.Lichhocs.FindAsync(id);
            if (Lichhoc == null)
            {
                return NotFound();
            }
            _context.Lichhocs.Remove(Lichhoc);
            await _context.SaveChangesAsync();
            return Lichhoc;
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
