using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Admin
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool? Isactive { get; set; }
        public bool? Isdelete { get; set; }
        public string Name { get; set; }
    }
}
