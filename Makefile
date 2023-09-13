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
  
endef
export header

.PHONY: help
help:
	@echo "$$header"

.PHONY: openapi
openapi:
	python -m api.extract-openapi --app api.main:app --app-dir ./ --out openapi.json

.PHONY: run_dev
run_dev:
	uvicorn api.main:app --reload

.PHONY: seed_dev
seed_dev:
	python -m api.database.seed --count 50

.PHONY: seed
seed:
	docker exec -it lphw_api python -m api.database.seed --count 50

.PHONY: migrate_dev
migrate_dev:
	alembic upgrade head

.PHONY: migrate
migrate:
	docker exec -it lphw_api alembic upgrade head

.DEFAULT_GOAL := help
