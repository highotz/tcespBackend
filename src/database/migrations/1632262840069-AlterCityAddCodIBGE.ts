import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterCityAddCodIBGE1632262840069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "citys",
      new TableColumn({
        name: "cod_ibge",
        type: "bigint",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("citys", "cod_ibge");
  }
}
