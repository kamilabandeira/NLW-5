import { Router } from "express";
import { SettingsController } from "./contollers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };

// import { getCustomRepository } from "typeorm";

// import { SettingsRepositry } from "./repositories/SettingsRepository";

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Bodu params => {
 * 
 * }
 */


    // const { chat, username } = request.body;

    // const settingsRepositry = getCustomRepository(SettingsRepositry);

    // const settings = settingsRepositry.create({
    //    chat,
    //    username,
    // });


    // await settingsRepositry.save(settings);

    // return response.json(settings);



