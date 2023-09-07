from fastapi import FastAPI
from fastapi_pagination import add_pagination

from .endpoints import robots

app = FastAPI()
app.include_router(robots.router, prefix="/robots", tags=["robots"])

add_pagination(app)


@app.on_event("startup")
async def startup():
    pass


@app.on_event("shutdown")
async def shutdown():
    pass
