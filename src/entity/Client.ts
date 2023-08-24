import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: "CLIENT",
})
export class Client { 
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        length: 100,
    })
	name: string;

	@Column({
        length: 100,
    })
	email: string;
}
