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

        const report = reportsRepository.create({
            description,
            outcome,
            opened,
            patrimonio
            
        });

        await reportsRepository.save(report);

        return response.status(201).json(report);

    }
}

