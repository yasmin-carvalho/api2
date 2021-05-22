import { getCustomRepository, Repository } from 'typeorm';
import { HistoryModel } from '../models/HistoryModel';
import { HistoryRepository } from '../repositories/HistoryRepository';


class HistoryService {
    private connectHistory: Repository<HistoryModel>
    constructor() {
        this.connectHistory = getCustomRepository(HistoryRepository)
    }

    async create(city: string, country: string, temperature: number, humidity: number, weather: string){
        try {
            console.log('Caiu')
            const history = this.connectHistory.create({
                city, 
                country,
                temperature,
                humidity,
                weather
            })
            console.log(history);
            await this.connectHistory.save(history)
            return { status: 201, obj: history}
        } catch (error) {
            throw error 
        }  
    }
}

export { HistoryService }