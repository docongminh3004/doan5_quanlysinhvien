using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project5.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace project5.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {

        private readonly qlsinhvienContext _context;

        public AdminsController(qlsinhvienContext context)
        {
            _context = context;
        }
        [HttpPost("login")]
        public IActionResult Login(Login lg)
        {
            var us = _context.Admins.Where(x => x.Username == lg.Username && x.Password == lg.Password).FirstOrDefault();
            return Ok(us);
        }
        /// <summary>
        /// bảng danh sách đóng tiền
        /// </summary>
        /// <returns>1 danh sách dóng tiền</returns>
        [HttpGet("khoanthu")]

        public IActionResult Khoanthu()
        {
            var model = from t1 in _context.Khoanthus
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
            //PaginationViewModel paginationViewModel = new PaginationViewModel();
            //try
            //{
            //    int page = int.Parse(data["page"].ToString());
            //    int pageSize = int.Parse(data["pageSize"].ToString());
            //    var nameSearch = "";
            //    if (data.ContainsKey("nameSearch") && !string.IsNullOrEmpty(data["nameSearch"].ToString().Trim()))
            //        nameSearch = data["nameSearch"].ToString().Trim().ToLower();
            //    paginationViewModel.Page = page;
            //    paginationViewModel.PageSize = pageSize;
            //    paginationViewModel.TotalItems = _context.Khoanthus.Where(x => x.Masv.ToString().Contains(nameSearch)).Count();

            //    var model = from t1 in _context.Khoanthus.ToList()
            //                join t2 in _context.Sinhviens on t1.Masv equals t2.Masv
            //                select new
            //                {
            //                    t1.Id,
            //                    t1.Masv,
            //                    t1.Tenkhoanthu,
            //                    t1.Khoanthu1,
            //                    t1.Status,
            //                    t1.Dotthu,
            //                    t1.Hocki,
            //                    t1.Hocphi,
            //                    t1.Sotiendanop,
            //                    t1.Ngaynop,
            //                    t1.Ngaytao,
            //                    t1.Nguoitao,
            //                    t1.Nguoinhan,
            //                    t1.Namhoc,
            //                    t2.Tensv
            //                };



            //    string sortByName = "";
            //    if (data.ContainsKey("sortByName") && !string.IsNullOrEmpty(data["sortByName"].ToString().Trim()))
            //        sortByName = data["sortByName"].ToString().Trim().ToLower();
            //    switch (sortByName)
            //    {
            //        case "asc":
            //            model = model.OrderBy(x => x.Hocki).ToList();
            //            break;

            //        case "desc":
            //            model = model.OrderByDescending(x => x.Hocki).ToList();
            //            break;
            //    }
            //    string sortByCreatedDate = "";
            //    if (data.ContainsKey("sortByCreatedDate") && !string.IsNullOrEmpty(data["sortByCreatedDate"].ToString().Trim()))
            //        sortByCreatedDate = data["sortByCreatedDate"].ToString().Trim().ToLower();
            //    switch (sortByCreatedDate)
            //    {
            //        case "asc":
            //            model = model.OrderBy(x => x.Ngaynop).ToList();
            //            break;

            //        case "desc":
            //            model = model.OrderByDescending(x => x.Ngaynop).ToList();
            //            break;
            //    }
            //    paginationViewModel.Data = model.Where(x => x.Masv.ToString().ToLower().IndexOf(nameSearch) >= 0).Skip((page - 1) * pageSize).Take(pageSize);

            //}
            //catch (Exception ex)
            //{
            //    throw new Exception(ex.Message);
            //}
            //return Ok(paginationViewModel);
        }



        /// <summary>
        /// Them khoan thu
        /// </summary>
        /// <param name="khoanthu">khoan thu</param>
        /// <returns>1 khoan thu</returns>
        [HttpPost("themkhoanthu")]
        public IActionResult ThemKhoanThu(Khoanthu khoanthu)
        {
            khoanthu.Ngaytao = DateTime.Now;
            //khoanthu.Ngaynop = DateTime.Now;
            khoanthu.Nguoitao = "Admin truong utehy";
            khoanthu.Nguoinhan = "Admin truong utehy";
            _context.Khoanthus.Add(khoanthu);
            _context.SaveChanges();
            return Ok(khoanthu);
        }


        [HttpGet("getsinhvien")]
        public IActionResult getsinhvien()
        {
            return Ok(_context.Sinhviens.ToList());
        }
    }
}
