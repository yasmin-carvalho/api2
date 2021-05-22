import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHistory1621706911850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'history',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'city',
                    type: 'varchar'
                },
                {
                    name: 'country',
                    type: 'varchar'
                },
                {
                    name: 'temperature',
                    type: 'number'
                },
                {
                    name: 'humidity',
                    type: 'number'
                },
                {
                    name: 'weather',
                    type: 'varchar'
                }

            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('history');
    }

}
