using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AugTechRSI.Migrations
{
    public partial class AddingIdentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.AddColumn<string>(
                name: "fieldName",
                table: "Department",
                nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Department",
            //    columns: table => new
            //    {
            //        DepartmentID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        DepartmentName = table.Column<string>(maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Department", x => x.DepartmentID);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "Level",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Level",
            //    columns: table => new
            //    {
            //        LevelID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        LevelValue = table.Column<string>(maxLength: 50, nullable: true),
            //        LevelDescription = table.Column<string>(maxLength: 50, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Level", x => x.LevelID);
            //    });


            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "Location",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Location",
            //    columns: table => new
            //    {
            //        LocationID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        LocationName = table.Column<string>(maxLength: 50, nullable: false),
            //        LocationPhone = table.Column<string>(unicode: false, maxLength: 15, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Location", x => x.LocationID);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "SkillType",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "SkillType",
            //    columns: table => new
            //    {
            //        TypeID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        TypeName = table.Column<string>(maxLength: 50, nullable: false),
            //        TypeDescription = table.Column<string>(maxLength: 100, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SkillType", x => x.TypeID);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "SOW",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "SOW",
            //    columns: table => new
            //    {
            //        SOW_ID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        ContractStart = table.Column<DateTime>(type: "date", nullable: false),
            //        ContractEnd = table.Column<DateTime>(type: "date", nullable: false),
            //        ClientName = table.Column<string>(maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_SOW", x => x.SOW_ID);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "Supervisor",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Supervisor",
            //    columns: table => new
            //    {
            //        SupFirstName = table.Column<string>(maxLength: 50, nullable: false),
            //        SupLastName = table.Column<string>(maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Supervisor", x => new { x.SupFirstName, x.SupLastName });
            //    });


            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "Skill",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Skill",
            //    columns: table => new
            //    {
            //        SkillID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        SkillTitle = table.Column<string>(maxLength: 50, nullable: false),
            //        SkillDescription = table.Column<string>(maxLength: 100, nullable: true),
            //        TypeID = table.Column<int>(nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Skill", x => x.SkillID);
            //        table.ForeignKey(
            //            name: "FK_Skill_SkillType",
            //            column: x => x.TypeID,
            //            principalTable: "SkillType",
            //            principalColumn: "TypeID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "Employee",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "Employee",
            //    columns: table => new
            //    {
            //        UserID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        FirstName = table.Column<string>(maxLength: 50, nullable: false),
            //        LastName = table.Column<string>(maxLength: 50, nullable: false),
            //        Position = table.Column<string>(maxLength: 50, nullable: true),
            //        DepartmentID = table.Column<int>(nullable: false),
            //        LocationID = table.Column<int>(nullable: false),
            //        SOW_ID = table.Column<int>(nullable: true),
            //        SupFirstName = table.Column<string>(maxLength: 50, nullable: true),
            //        SupLastName = table.Column<string>(maxLength: 50, nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Employee", x => x.UserID);
            //        table.ForeignKey(
            //            name: "FK_Employee_Department",
            //            column: x => x.DepartmentID,
            //            principalTable: "Department",
            //            principalColumn: "DepartmentID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_Employee_Location",
            //            column: x => x.LocationID,
            //            principalTable: "Location",
            //            principalColumn: "LocationID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_Employee_SOW",
            //            column: x => x.SOW_ID,
            //            principalTable: "SOW",
            //            principalColumn: "SOW_ID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_Employee_Supervisor",
            //            columns: x => new { x.SupFirstName, x.SupLastName },
            //            principalTable: "Supervisor",
            //            principalColumns: new[] { "SupFirstName", "SupLastName" },
            //            onDelete: ReferentialAction.Restrict);
            //    });

            migrationBuilder.AddColumn<string>(
            name: "fieldName",
            table: "EmployeeSkill",
            nullable: true);

            //migrationBuilder.CreateTable(
            //    name: "EmployeeSkill",
            //    columns: table => new
            //    {
            //        EmpSkillID = table.Column<int>(nullable: false)
            //            .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
            //        UserID = table.Column<int>(nullable: false),
            //        SkillID = table.Column<int>(nullable: false),
            //        LevelID = table.Column<int>(nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_EmployeeSkill", x => x.EmpSkillID);
            //        table.ForeignKey(
            //            name: "FK_EmployeeSkill_Level",
            //            column: x => x.LevelID,
            //            principalTable: "Level",
            //            principalColumn: "LevelID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_EmployeeSkill_Skill",
            //            column: x => x.SkillID,
            //            principalTable: "Skill",
            //            principalColumn: "SkillID",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_EmployeeSkill_Employee",
            //            column: x => x.UserID,
            //            principalTable: "Employee",
            //            principalColumn: "UserID",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_DepartmentID",
                table: "Employee",
                column: "DepartmentID");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_LocationID",
                table: "Employee",
                column: "LocationID");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_SOW_ID",
                table: "Employee",
                column: "SOW_ID");

            migrationBuilder.CreateIndex(
                name: "IX_Employee_SupFirstName_SupLastName",
                table: "Employee",
                columns: new[] { "SupFirstName", "SupLastName" });

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeSkill_LevelID",
                table: "EmployeeSkill",
                column: "LevelID");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeSkill_SkillID",
                table: "EmployeeSkill",
                column: "SkillID");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeSkill_UserID",
                table: "EmployeeSkill",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Skill_TypeID",
                table: "Skill",
                column: "TypeID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "EmployeeSkill");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Level");

            migrationBuilder.DropTable(
                name: "Skill");

            migrationBuilder.DropTable(
                name: "Employee");

            migrationBuilder.DropTable(
                name: "SkillType");

            migrationBuilder.DropTable(
                name: "Department");

            migrationBuilder.DropTable(
                name: "Location");

            migrationBuilder.DropTable(
                name: "SOW");

            migrationBuilder.DropTable(
                name: "Supervisor");
        }
    }
}
