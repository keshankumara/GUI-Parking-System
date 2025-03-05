using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace SmartParking_Desktop
{
    public class UserDbContext:Microsoft.EntityFrameworkCore.DbContext 
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = DataFile.db");
        }

        public Microsoft.EntityFrameworkCore.DbSet<User> Users { get; set; }
    }

 }
