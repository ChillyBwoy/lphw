from fastapi import FastAPI, Request, status
from fastapi.routing import APIRoute
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi_pagination import add_pagination

from .exceptions import map_validation_error
from .endpoints import robots
from .settings import get_settings

config = get_settings()


def custom_generate_unique_id(route: APIRoute):
    return f"{route.tags[0]}-{route.name}"


app = FastAPI(generate_unique_id_function=custom_generate_unique_id)
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.server.allow_origins,
    allow_credentials=config.server.allow_credentials,
    allow_methods=config.server.allow_methods,
    allow_headers=config.server.allow_headers,
)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(_request: Request, exc: RequestValidationError):
    errors = map_validation_error(exc)

    return JSONResponse(
        status_code=status.HTTP_400_BAD_REQUEST,
        content=jsonable_encoder({"errors": errors}),
    )


app.include_router(robots.router, prefix="/api/v1")

add_pagination(app)


@app.on_event("startup")
async def startup():
    pass


@app.on_event("shutdown")
async def shutdown():
    pass
