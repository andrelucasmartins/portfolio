import { Technology } from "@core"
import { Controller, Get } from "@nestjs/common"
import { TechnologyProvider } from "./technology.provider"

@Controller("technologies")
export class TechnologyController {
	constructor(private readonly repo: TechnologyProvider) {}

	@Get()
	async getAll(): Promise<Technology[]> {
		return this.repo.getAll()
	}

	@Get("highlightes")
	async getHighlightes(): Promise<Technology[]> {
		return this.repo.getHighlight()
	}
}
