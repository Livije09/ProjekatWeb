using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatBilijar.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IDStola",
                table: "Sto",
                newName: "IDS");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IDS",
                table: "Sto",
                newName: "IDStola");
        }
    }
}
