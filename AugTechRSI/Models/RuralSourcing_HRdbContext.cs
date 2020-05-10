using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AugTechRSI.Models
{
    public partial class RuralSourcing_HRdbContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext   //---------! :DbContext
    {
        public RuralSourcing_HRdbContext()
        {
        }

        public RuralSourcing_HRdbContext(DbContextOptions<RuralSourcing_HRdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Department { get; set; }
        public virtual DbSet<Employee> Employee { get; set; }
        public virtual DbSet<EmployeeSkill> EmployeeSkill { get; set; }
        public virtual DbSet<Level> Level { get; set; }
        public virtual DbSet<Location> Location { get; set; }
        public virtual DbSet<Skill> Skill { get; set; }
        public virtual DbSet<SkillType> SkillType { get; set; }
        public virtual DbSet<Sow> Sow { get; set; }
        public virtual DbSet<Supervisor> Supervisor { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //you get this error in Package Manager Console when migrating identity:
            //The entity type 'IdentityUserLogin<string>' requires a primary key to be defined.
            //to get rid of this error, call the base class here because you changed
            // :DbContext to IdentityDbContext  //---------!
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Seed();

            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Department>(entity =>
            {
                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.DepartmentId).HasColumnName("DepartmentID");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.Position).HasMaxLength(50);

                entity.Property(e => e.SowId).HasColumnName("SOW_ID");

                entity.Property(e => e.SupFirstName).HasMaxLength(50);

                entity.Property(e => e.SupLastName).HasMaxLength(50);

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.DepartmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Employee_Department");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Employee_Location");

                entity.HasOne(d => d.Sow)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => d.SowId)
                    .HasConstraintName("FK_Employee_SOW");

                entity.HasOne(d => d.Sup)
                    .WithMany(p => p.Employee)
                    .HasForeignKey(d => new { d.SupFirstName, d.SupLastName })
                    .HasConstraintName("FK_Employee_Supervisor");
            });

            modelBuilder.Entity<EmployeeSkill>(entity =>
            {
                entity.HasKey(e => e.EmpSkillId);

                entity.Property(e => e.EmpSkillId).HasColumnName("EmpSkillID");

                entity.Property(e => e.LevelId).HasColumnName("LevelID");

                entity.Property(e => e.SkillId).HasColumnName("SkillID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Level)
                    .WithMany(p => p.EmployeeSkill)
                    .HasForeignKey(d => d.LevelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeSkill_Level");

                entity.HasOne(d => d.Skill)
                    .WithMany(p => p.EmployeeSkill)
                    .HasForeignKey(d => d.SkillId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeSkill_Skill");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.EmployeeSkill)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EmployeeSkill_Employee");
            });

            modelBuilder.Entity<Level>(entity =>
            {
                entity.Property(e => e.LevelId).HasColumnName("LevelID");

                entity.Property(e => e.LevelDescription).HasMaxLength(50);

                entity.Property(e => e.LevelValue).HasMaxLength(50);
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.Property(e => e.LocationId).HasColumnName("LocationID");

                entity.Property(e => e.LocationName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LocationPhone)
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Skill>(entity =>
            {
                entity.Property(e => e.SkillId).HasColumnName("SkillID");

                entity.Property(e => e.SkillDescription).HasMaxLength(100);

                entity.Property(e => e.SkillTitle)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TypeId).HasColumnName("TypeID");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Skill)
                    .HasForeignKey(d => d.TypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Skill_SkillType");
            });

            modelBuilder.Entity<SkillType>(entity =>
            {
                entity.HasKey(e => e.TypeId);

                entity.Property(e => e.TypeId).HasColumnName("TypeID");

                entity.Property(e => e.TypeDescription).HasMaxLength(100);

                entity.Property(e => e.TypeName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Sow>(entity =>
            {
                entity.ToTable("SOW");

                entity.Property(e => e.SowId).HasColumnName("SOW_ID");

                entity.Property(e => e.ClientName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ContractEnd).HasColumnType("date");

                entity.Property(e => e.ContractStart).HasColumnType("date");
            });

            modelBuilder.Entity<Supervisor>(entity =>
            {
                entity.HasKey(e => new { e.SupFirstName, e.SupLastName });

                entity.Property(e => e.SupFirstName).HasMaxLength(50);

                entity.Property(e => e.SupLastName).HasMaxLength(50);
            });
        }
    }
}
