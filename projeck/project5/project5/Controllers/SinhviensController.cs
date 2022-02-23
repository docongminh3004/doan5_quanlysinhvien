using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using project5.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace project5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SinhviensController : ControllerBase // khai báo các đối tượng để sử dụng
    {
        private readonly qlsinhvienContext _context;
        private readonly IWebHostEnvironment _env;
        public SinhviensController(qlsinhvienContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpPost("login")]
        public IActionResult Login(Login lg)
        {
            var us = _context.Sinhviens.Where(x => x.Masv == lg.Masv && x.Matkhau == lg.Matkhau).FirstOrDefault();
            return Ok(us);
        }
        // GET: api/Sinhviens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sinhvien>>> GetSinhviens()
        {
            return await _context.Sinhviens.ToListAsync();
        }

        // GET: api/Sinhviens/5 
        [HttpGet("{id}")]
        public async Task<ActionResult<Sinhvien>> GetSinhvien(long id)
        {
            var sinhvien = await _context.Sinhviens.FindAsync(id);

            if (sinhvien == null)
            {
                return NotFound();
            }

            return sinhvien;
        }

        // PUT: api/Sinhviens/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSinhvien(long id, Sinhvien sinhvien)
        {
            if (id != sinhvien.Masv)
            {
                return BadRequest();
            }
            sinhvien.Anhcmnd = "sinhvien.jpg";
            _context.Entry(sinhvien).State = EntityState.Modified;

            try
            {

                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SinhvienExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return new JsonResult("đã sửa thành công");
        }

        // POST: api/Sinhviens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public IActionResult PostSinhvien(Sinhvien sinhvien)//ctrl alt p
        {
            sinhvien.Anhcmnd = "sinhvien.jpg";
            _context.Sinhviens.Add(sinhvien);
            try
            {
                 _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (SinhvienExists(sinhvien.Masv))
                {
                    return new JsonResult("Mã sinh viên đã tồn tại.");
                }
                else
                {
                    throw;
                }
            }

            return new JsonResult("Đã thêm thành công");
        }

        // DELETE: api/Sinhviens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSinhvien(long id)
        {
            var sinhvien = await _context.Sinhviens.FindAsync(id);
            if (sinhvien == null)
            {
                return NotFound();
            }

            _context.Sinhviens.Remove(sinhvien);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // hàm check mã trùng khi lỗi trả ra lỗi 
        private bool SinhvienExists(long id) 
        {
            return _context.Sinhviens.Any(e => e.Masv == id);
        }
        //lấy ra danh sách lớp để chọn
        [Route("GetLophoc")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lophoc>>> GetLophoc()
        {
            return await _context.Lophocs.ToListAsync();
        }
        //chinh sua thong tin ca nhan
        [Route("updateprofile")]
        [HttpPut]
        public async Task<IActionResult> updateprofile(Sinhvien sinhvien)
        {
            _context.Entry(sinhvien).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return new JsonResult("đã sửa thành công");
        }


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {

            var httpRequest = Request.Form;
            try
            {
                var posted = httpRequest.Files[0];//lấy mảng đầu tiên
                string filename = posted.FileName.ToString();//lấy ra tên anh
                var physicalPath = _env.ContentRootPath + "/image/sinhvien/" + Path.GetFileName(filename);//đường dẫn ảnh

                using (var stream = new FileStream(physicalPath, FileMode.Create))//thư viện IO
                {
                    posted.CopyTo(stream);
                }

                return new JsonResult(filename);// trả về tên ảnh vidu : sinhvien.jpg
            }
            catch (Exception ex)
            {
                var result= ex.Message;//trả ra thông báo lỗi
                return new JsonResult(result);
            }

        }





        /// <summary>
        /// xem các khoản thu học phí bên phía người dùng (sinh viên)
        /// </summary>
        /// <param name="masv">mã sinh viên</param>
        /// <returns> 1 danh sách hóa đơn học phí có mã sv đó</returns>
        [HttpGet("XemKhoanThu/{masv}")]

        public IActionResult Khoanthu(long masv) // mục đích để jorn lấy thông tin bảng khác
        {
            var model = from t1 in _context.Khoanthus.Where(x => x.Masv == masv)
                        join t2 in _context.Sinhviens on t1.Masv equals t2.Masv
                        select new
                        {
                            t1.Id,
                            t1.Masv,
                            t1.Tenkhoanthu,
                            t1.Khoanthu1,
                            t1.Status,
                            t1.Dotthu,
                            t1.Hocki,
                            t1.Hocphi,
                            t1.Sotiendanop,
                            t1.Ngaynop,
                            t1.Ngaytao,
                            t1.Nguoitao,
                            t1.Nguoinhan,
                            t1.Namhoc,
                            t2.Tensv
                            
                        };

            return Ok(model.ToList()); 
      
        }
        //POST thêm khai báo vacxin
        [HttpPost("Khaibaovacxin")]
        public IActionResult Khaibaovacxin(Kekhai kekhai)
        {
            if(kekhai.Status == null)
            {
                kekhai.Status = false;//chưa tiêm vacxin
            }
            _context.Kekhais.Add(kekhai); //_context biến đại diện cho qlsinhsinh => ấn f12
            _context.SaveChanges();
            return Ok(kekhai);
        }
    }

}
