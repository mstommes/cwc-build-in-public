import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameFields1730334904990 implements MigrationInterface {
    name = 'AddNameFields1730334904990'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" ADD "first_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "name" ADD "last_name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "name" DROP COLUMN "first_name"`);
    }

}
