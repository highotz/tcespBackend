import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableItemAddColumnStatus1634399954190
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "itens",
      new TableColumn({
        name: "status",
        type: "varchar",
        default: "'pending'",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("itens", "status");
  }
}
