import { Request, Response } from "express";
import * as yup from 'yup';
import { HistoryService } from "../services/HistoryService";

class HistoryController {
    async create(req: Request, resp: Response){
        const { city, country, temperature, humidity, weather } = req.body

        const schema = yup.object().shape({
            city: yup.string().required('City is required'),
            country: yup.string().required('Country is required'),
            temperature: yup.number().required('Temperature is required'),
            humidity: yup.number().required('humidity is required'),
            weather: yup.string().required('Weather is required'),
        })
        try {
            await schema.validate(req.body, { abortEarly: false })
        } catch (error){
            return resp.status(400).json({ message: error.message })
        }

        const historyService = new HistoryService()
    
        try {
            const history = await historyService.create(city, country, temperature, humidity, weather)
            return resp.status(history.status).json(history.obj)
        } catch (error) {
            return resp.status(400).json({ message: 'Falha de conexão com o Banco de Dados'})
        }
    }
}

export { HistoryController }


