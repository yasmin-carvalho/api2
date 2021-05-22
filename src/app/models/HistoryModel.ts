import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity('history')
class HistoryModel {

    @PrimaryColumn()
    id: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    temperature: number;

    @Column()
    humidity: number;

    @Column()
    weather: string;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { HistoryModel }