import { Router } from 'express';
import personagemService from "../services/PersonagemService.js";

const routes = new Router();

/**
 * Simple responser
 * @param {Request} req
 * @param {Response} res
 */
async function baseResponser(req, res) {
  res.status(200).json({ message: 'ok' });
}

async function getPersonagem(req, res) {
  const personagem = await personagemService.getPersonagem();
  res.status(200).json(personagem);
}


routes.get('/', baseResponser);
routes.get('/x', getPersonagem);

export default routes;