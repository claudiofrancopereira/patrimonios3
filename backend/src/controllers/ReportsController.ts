import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Report } from '../models/Report';

export default {
    async create(request: Request, response: Response) {
        const reportsRepository = getRepository(Report);
        const patrimonio = request.params;

        const {
            description,
            outcome,
            opened,
        } = request.body

        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename }
        });

        const report = reportsRepository.create({
            description,
            outcome,
            opened,
            patrimonio,
            images
        });

        await reportsRepository.save(report);

        return response.status(201).json(report);

    }
}

