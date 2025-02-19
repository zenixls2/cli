/**
 * Fluence CLI
 * Copyright (C) 2024 Fluence DAO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { BaseCommand } from "../../baseCommand.js";
import { jsonStringify } from "../../common.js";
import { commandObj } from "../../lib/commandObj.js";
import { getAquaImports } from "../../lib/helpers/aquaImports.js";
import { initCli } from "../../lib/lifeCycle.js";

export default class Json extends BaseCommand<typeof Json> {
  static override description =
    "Returns a list of aqua imports that CLI produces";

  async run(): Promise<void> {
    await initCli(this, await this.parse(Json));
    commandObj.log(jsonStringify(await getAquaImports()));
  }
}
