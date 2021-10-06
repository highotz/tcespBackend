import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAudits1633474744129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "audits",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "observation",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "city_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "auditions_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deleted_at",
            type: "timestamp",
            default: null,
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FK_UserAudit",
            referencedTableName: "users",
            referencedColumnNames: ["id_tecesp"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_CityAudit",
            referencedTableName: "citys",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_AuditionsAudit",
            referencedTableName: "auditions",
            referencedColumnNames: ["id"],
            columnNames: ["auditions_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("audits");
  }
}
