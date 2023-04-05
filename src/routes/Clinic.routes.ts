import { Router } from 'express';
import ClinicController from '../controllers/ClinicsController';
import ClinicRepository from '../repository/ClinicRepository';
import ClinicService from '../services/Clinic.service';

const clinicRouter = Router();

const repository = new ClinicRepository();
const service = new ClinicService(repository);
const controller = new ClinicController(service);

clinicRouter.post('/', controller.createClinic);
clinicRouter.get('/:id', controller.showClinic);
// clinicRouter.put('/:id', controller.updateClinic);
// clinicRouter.delete('/:id', controller.deleteClinic);

export default clinicRouter;