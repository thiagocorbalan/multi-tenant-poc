import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('"USER"')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        length: 100,
    })
	name: string;

	@Column({
        length: 200,
    })
	email: string;

	@Column({
        length: 20,
    })
	password: string;

	@Column()
	tenant: number
}
