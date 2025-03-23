import { Module } from "@nestjs/common"
import { DbModule } from "src/db/db.module"
import { ProjectController } from "./project.controller"
import { ProjectProvider } from "./project.provider"

@Module({
	providers: [ProjectProvider],
	controllers: [ProjectController],
	imports: [DbModule],
})
export class ProjectModule {}
