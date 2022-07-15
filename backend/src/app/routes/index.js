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
async function getCrencas(req, res) {
    const crencas = await personagemService.getCrencas();
    res.status(200).json(crencas);
}

async function getPraticas(req, res) {
    const praticas = await personagemService.getPraticas();
    res.status(200).json(praticas);
}

async function getInstrumentos(req, res) {
    const instrumentos = await personagemService.getInstrumentos();
    res.status(200).json(instrumentos);
}

async function getTalents(req, res) {
    const talents = await personagemService.getTalents();
    res.status(200).json(talents);
}

async function getSkills(req, res) {
    const skills = await personagemService.getSkills();
    res.status(200).json(skills);
}

async function getKnowledges(req, res) {
    const knowledges = await personagemService.getKnowledges();
    res.status(200).json(knowledges);
}


/*Rotas Iniciais da Pagina*/
routes.get('/', baseResponser);

/*Rotas de Personagem*/
routes.get('/x/:arquetipo/:nivel', getPersonagem);

/*Rotas de Crencas, Praticas e Instrumentos*/
routes.get('/crencas/', getCrencas);
routes.get('/praticas/', getPraticas);
routes.get('/instrumentos/', getInstrumentos);

/*Rotas de Abilities*/
routes.get('/talents/', getTalents);
routes.get('/skills/', getSkills);
routes.get('/knowledges/', getKnowledges);

export default routes;
