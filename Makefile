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
  make help            show this help
  make openapi         generate openapi.json
  make run_dev         run the API in development mode
  make run             run the API in production mode
  make seed_dev        seed the database in development mode
  make seed            seed the database in production mode
  make migrate_dev     migrate the database in development mode
  make migrate         migrate the database in production mode
  
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

.PHONY: run
run:
	docker-compose -f docker-compose.prod.yml up -d --build

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
