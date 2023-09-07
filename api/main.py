from fastapi import FastAPI
from fastapi.routing import APIRoute
from fastapi_pagination import add_pagination

from .endpoints import robots


def custom_generate_unique_id(route: APIRoute):
    return f"{route.tags[0]}-{route.name}"


app = FastAPI(generate_unique_id_function=custom_generate_unique_id)
app.include_router(robots.router, prefix="/robots", tags=["robot"])

add_pagination(app)


@app.on_event("startup")
async def startup():
    pass


@app.on_event("shutdown")
async def shutdown():
    pass
