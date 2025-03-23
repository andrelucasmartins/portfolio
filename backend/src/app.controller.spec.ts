import { Id } from "@core"
import { Test, TestingModule } from "@nestjs/testing"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

jest.mock("@core", () => ({
	Id: {
		gerar: jest.fn(() => "generated-id"),
	},
}))

describe("AppController", () => {
	let appController: AppController
	let appService: AppService

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile()

		appController = app.get<AppController>(AppController)
		appService = app.get<AppService>(AppService)
	})

	describe("root", () => {
		it('should return "Hello World!"', () => {
			const result = "pong"

			expect(appController.ping()).toBe(result)
		})
	})

	describe("AppService", () => {
		it("should return 'Legal... generated-id'", () => {
			const result = "Legal... generated-id"

			expect(appService.getHello()).toBe(result)
		})

		it("should call Id.gerar()", () => {
			appService.getHello()

			expect(Id.gerar()).toHaveBeenCalled()
		})
	})
})
