from fastapi import FastAPI
from .endpoints import robots

app = FastAPI()
app.include_router(robots.router, prefix="/robots", tags=["robots"])


@app.on_event("startup")
async def startup():
    pass


@app.on_event("shutdown")
async def shutdown():
    pass
