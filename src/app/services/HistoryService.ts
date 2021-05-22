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
            const history = this.connectHistory.create({
                city, 
                country,
                temperature,
                humidity,
                weather
            })
            await this.connectHistory.save(history) //conecta no banco
            return { status: 201, obj: history} 
        } catch (error) {
            throw error 
        }  
    }

    async read(){
        try {
            return await this.connectHistory.find()
        } catch (error) {
            throw error
        }
    }
}

export { HistoryService }