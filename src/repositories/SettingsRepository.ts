import { Repository, EntityRepository } from "typeorm";

import { Setting } from "../entities/Setting";

class SettingsRepositry extends Repository<Setting> {

}

export { SettingsRepositry }