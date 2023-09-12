info: header

define header

██╗     ███████╗██╗  ██╗██╗  ██╗██████╗ ██╗     ██╗   ██╗███████╗███████╗
██║     ██╔════╝╚██╗██╔╝╚██╗██╔╝██╔══██╗██║     ██║   ██║██╔════╝██╔════╝
██║     █████╗   ╚███╔╝  ╚███╔╝ ██████╔╝██║     ██║   ██║███████╗███████╗
██║     ██╔══╝   ██╔██╗  ██╔██╗ ██╔═══╝ ██║     ██║   ██║╚════██║╚════██║
███████╗███████╗██╔╝ ██╗██╔╝ ██╗██║     ███████╗╚██████╔╝███████║███████║
╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝ ╚══════╝╚══════╝

Makefile for the API.
Usage:
  make openapi  Generate OpenAPI schema
  make seed     Seed database with fake data
  make help     Show this help message"
  make run_dev  Run the API in development mode
endef
export header


.PHONY: openapi
openapi:
	python -m api.extract-openapi --app api.main:app --app-dir ./ --out openapi.json

.PHONY: seed
seed:
	python -m api.database.seed --count 20

.PHONY: help
help:
	@echo "$$header"

.PHONE: run_dev
run_dev:
	uvicorn api.main:app --reload

.DEFAULT_GOAL := help
