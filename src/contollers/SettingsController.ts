import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepositry } from "../repositories/SettingsRepository";

class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settingsRepositry = getCustomRepository(SettingsRepositry);

        const settings = settingsRepositry.create({
            chat,
            username,
        });


        await settingsRepositry.save(settings);

        return response.json(settings);
    }
}

export { SettingsController }