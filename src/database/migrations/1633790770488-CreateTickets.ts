import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTickets1633790770488 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tickets",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "city_id",
            type: "uuid",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "due_date",
            type: "timestamp",
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
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKUserTicket",
            referencedTableName: "users",
            referencedColumnNames: ["id_tecesp"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCityTicket",
            referencedTableName: "citys",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "CASCADE",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tickets");
  }
}
