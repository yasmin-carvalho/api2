import { Request, Response } from "express";
import * as yup from 'yup';
import { HistoryService } from "../services/HistoryService";

class HistoryController {
    async create(req: Request, resp: Response){
        // declaro as variaveis recebidas do corpo da requisição
        const { city, country, temperature, humidity, weather } = req.body

        // Valido se as variaveis estão tudo correto
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

        // Se está tudo correto instancio a service e chamo seu metodo para criar no banco
        const historyService = new HistoryService()
    
        // chama a service q faz a coxão com o banco
        try {
            const history = await historyService.create(city, country, temperature, humidity, weather)
            //se deu certo retorno msg contendo o abjeto criado
            return resp.status(history.status).json(history.obj)
        } 
        // caso a coxexão falhe retorno a msg no front q deu falha ao conecatr no banco
        catch (error) {
            return resp.status(400).json({ message: 'Falha de conexão com o Banco de Dados'})
        }
    }

    async read(req: Request, resp: Response){
        const historyService = new HistoryService()

        try {
            const allHistory = await historyService.read();
            return resp.status(200).json(allHistory);
        } catch (error) {
            return resp.status(400).json({ message: 'Falha de conexão com o banco de dados' })
        }
    }
}

export { HistoryController }


