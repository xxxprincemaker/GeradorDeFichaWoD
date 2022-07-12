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
  const personagem = await personagemService.getPersonagem(req.params.arquetipo, req.params.nivel);
  res.status(200).json(personagem);
}

async function something(req, res){
  res.status(200).json({ message: 'ok' });
}

/*Rotas Iniciais da Pagina*/
routes.get('/', baseResponser);

/*Rotas de Personagem*/
routes.get('/x/:arquetipo/:nivel', getPersonagem);


export default routes;