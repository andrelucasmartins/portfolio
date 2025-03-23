import { Module } from "@nestjs/common"
import { DbModule } from "src/db/db.module"
import { TechnologyController } from "./technology.controller"
import { TechnologyProvider } from "./technology.provider"

@Module({
	controllers: [TechnologyController],
	providers: [TechnologyProvider],
	imports: [DbModule],
})
export class TechnologyModule {}
