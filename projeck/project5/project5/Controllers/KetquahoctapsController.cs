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
    public class KetquahoctapsController : ControllerBase
    {
        private readonly qlsinhvienContext _context;

        public KetquahoctapsController(qlsinhvienContext context)
        {
            _context = context;
        }
        // GET: api/<KetquahoctapsController>

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ketquahoctap>>> GetKetquahoctap()
        {

            var rs = from t1 in _context.Ketquahoctaps
                     join t2 in _context.Sinhviens on t1.Masv equals t2.Masv
                     join t3 in _context.Hocphans on t1.Mahp equals t3.Mahp
                     select new
                     {
                         t1.Id,
                         t1.Masv,
                         t1.Malop,
                         t1.Mahp,
                         t1.Diemlan1,
                         t1.Diemlan2,
                         t1.Diemtb,
                         t1.Ghichu,
                         t2.Tensv,
                         t3.Tenhp,
                         t3.Sotc

                     };
            return Ok(await rs.ToListAsync());

        }

        // GET api/<KetquahoctapsController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ketquahoctap>> GetKetquahoctap(long id)
        {
            var Ketquahoctap = await _context.Ketquahoctaps.FindAsync(id);

            if (Ketquahoctap == null)
            {
                return NotFound();
            }

            return Ketquahoctap;
        }
        //ktra mã trùng
        private bool KetquahoctapExists(long id)
        {
            return _context.Ketquahoctaps.Any(e => e.Id == id);
        }
        // POST api/<KetquahoctapsController>
        [HttpPost]
        public async Task<ActionResult<Ketquahoctap>> PostKetquahoctap(Ketquahoctap Ketquahoctap)
        {
            if (KetquahoctapExists(Ketquahoctap.Id))
            {
                return new JsonResult("Mã lớp đã bị trùng vui lòng nhập lại .");
                //   return Conflict("");
            }
            else
            {


                _context.Ketquahoctaps.Add(Ketquahoctap);
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

        // PUT api/<KetquahoctapsController>/5
        [HttpPut("{id}")]
        public JsonResult PutKetquahoctap(long id, Ketquahoctap Ketquahoctap)
        {


            _context.Entry(Ketquahoctap).State = EntityState.Modified;
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

        // DELETE api/<KetquahoctapsController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ketquahoctap>> DeleteKetquahoctap(long id)
        {
            var Ketquahoctap = await _context.Ketquahoctaps.FindAsync(id);
            if (Ketquahoctap == null)
            {
                return NotFound();
            }
            _context.Ketquahoctaps.Remove(Ketquahoctap);
            await _context.SaveChangesAsync();
            return Ketquahoctap;
        }
        [Route("getsv")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sinhvien>>> Getlop()
        {
            return await _context.Sinhviens.ToListAsync();
        }
        [Route("gethocphan")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hocphan>>> geyhocphan()
        {
            return await _context.Hocphans.ToListAsync();
        }
        //phias trang sinh vien
        [Route("xemketqua/{id}")]
        [HttpGet]
        public IActionResult XemKetquahoctap(long id)
        {
            var Ketquahoctap = from t1 in _context.Ketquahoctaps.Where(x => x.Masv == id)
                               join t2 in _context.Hocphans on t1.Mahp equals t2.Mahp
                               select new
                               {
                                   t1.Id,
                                   t1.Mahp,
                                   t1.Malop,
                                   t1.Diemlan1,
                                   t1.Diemlan2,
                                   t1.Diemtb,
                                   t1.Ghichu,
                                   t2.Tenhp
                               };

            if (Ketquahoctap == null)
            {
                return NotFound();
            }

            return Ok(Ketquahoctap);
        }
    }
  
}