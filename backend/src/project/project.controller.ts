import { Project } from "@core"
import { Controller, Get, Param } from "@nestjs/common"
import { ProjectProvider } from "./project.provider"

@Controller("projects")
export class ProjectController {
	constructor(private readonly repo: ProjectProvider) {}

	@Get()
	async getAll(): Promise<Project[]> {
		return this.repo.getAll()
	}

	@Get(":id")
	async getById(@Param("id") id: string): Promise<Project | null> {
		return this.repo.getById(Number(id))
	}
}
