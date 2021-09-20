import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Patrimonio } from '../models/Patrimonio';

export default {
    async create(request: Request, response: Response) {
        const patrimoniosRepository = getRepository(Patrimonio);

        const {
            nome,
            endereco,
            latitude,
            longitude,
            notes,
        } = request.body

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const patrimonio = patrimoniosRepository.create({
            nome,
            endereco,
            latitude,
            longitude,
            notes,
            images,
        });

        await patrimoniosRepository.save(patrimonio);

        return response.status(201).json(patrimonio);

    },

    async index(request: Request, response: Response) {
        const patrimoniosRepository = getRepository(Patrimonio);

        const patrimonios = await patrimoniosRepository.find({
            relations: ['images', 'reports', 'reports.images' ]
        });

        return response.json(patrimonios)
    }
}

