using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjekatBilijar.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BilijarKlub",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Lokacija = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    BrojStolova = table.Column<int>(type: "int", nullable: false),
                    MaxLjudiZaStolom = table.Column<int>(type: "int", nullable: false),
                    MaxLokala = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BilijarKlub", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Narudzbina",
                columns: table => new
                {
                    IDN = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sokovi = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Pivo = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    BilijarKlubID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Narudzbina", x => x.IDN);
                    table.ForeignKey(
                        name: "FK_Narudzbina_BilijarKlub_BilijarKlubID",
                        column: x => x.BilijarKlubID,
                        principalTable: "BilijarKlub",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Sto",
                columns: table => new
                {
                    IDStola = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BrojStola = table.Column<int>(type: "int", nullable: false),
                    Stanje = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    MaxBrojLjudi = table.Column<int>(type: "int", nullable: false),
                    TrenutniBrojLjudi = table.Column<int>(type: "int", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    BilijarKlubID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sto", x => x.IDStola);
                    table.ForeignKey(
                        name: "FK_Sto_BilijarKlub_BilijarKlubID",
                        column: x => x.BilijarKlubID,
                        principalTable: "BilijarKlub",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Narudzbina_BilijarKlubID",
                table: "Narudzbina",
                column: "BilijarKlubID");

            migrationBuilder.CreateIndex(
                name: "IX_Sto_BilijarKlubID",
                table: "Sto",
                column: "BilijarKlubID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Narudzbina");

            migrationBuilder.DropTable(
                name: "Sto");

            migrationBuilder.DropTable(
                name: "BilijarKlub");
        }
    }
}
