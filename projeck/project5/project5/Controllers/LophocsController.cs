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
    public class LophocsController : ControllerBase
    {
        private readonly qlsinhvienContext _context;

        public LophocsController(qlsinhvienContext context)
        {
            _context = context;
        }
        // GET: api/<LophocsController>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lophoc>>> GetLophoc()
        {
            return await _context.Lophocs.Where(x => x.Isdelete != true).ToListAsync();
        }

        // GET api/<LophocsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lophoc>> GetLophoc(long id)
        {
            var lophoc = await _context.Lophocs.FindAsync(id);

            if (lophoc == null)
            {
                return NotFound();
            }

            return lophoc;
        }
        //ktra mã trùng
        private bool LophocExists(long id)
        {
            return _context.Lophocs.Any(e => e.Malop == id);
        }
        // POST api/<LophocsController>
        [HttpPost]
        public async Task<ActionResult<Lophoc>> PostLophoc(Lophoc lophoc)
        {
            if (LophocExists(lophoc.Malop))
            {
                return new JsonResult("Mã lớp đã bị trùng vui lòng nhập lại .");
                //   return Conflict("");
            }
            else
            {
                lophoc.Isactive = true;
                lophoc.Isdelete = false;
                _context.Lophocs.Add(lophoc);
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

        // PUT api/<LophocsController>/5
        [HttpPut("{id}")]
        public JsonResult PutLophoc(long id, Lophoc lophoc)
        {
            lophoc.Isactive = true;
            lophoc.Isdelete = false;
            _context.Entry(lophoc).State = EntityState.Modified;
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

        // DELETE api/<LophocsController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lophoc>> DeleteLophoc(long id)
        {
            var lophoc = await _context.Lophocs.FindAsync(id);
            if (lophoc == null)
            {
                return NotFound();
            }
            _context.Lophocs.Remove(lophoc);
            await _context.SaveChangesAsync();
            return lophoc;
        }
    }
}
