import uuid
from typing import Optional
from sqlalchemy import select
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.exceptions import RequestValidationError
from fastapi_pagination import Page
from fastapi_pagination.ext.sqlalchemy import paginate  # type: ignore
from sqlalchemy.orm import Session

from .. import schemas
from ..database import get_db
from ..repositories import robots as repo
from ..models import Robot

router = APIRouter(prefix="/robots", tags=["robots"])


@router.get("/", response_model=Page[schemas.Robot])
async def list(
    system_status: Optional[schemas.RobotStatus] = None,
    connected: Optional[bool] = None,
    order_by: Optional[str] = "created_at",
    order_direction: Optional[str] = "asc",
    db: Session = Depends(get_db),
):
    query = select(Robot)
    if system_status:
        query = query.where(Robot.system_status == system_status)

    if connected is not None:
        query = query.where(Robot.connected == connected)

    if order_by:
        try:
            order_by_column = getattr(Robot, order_by)
        except AttributeError:
            order_by_column = Robot.created_at
    else:
        order_by_column = Robot.created_at

    if order_direction == "desc":
        order_by_column = order_by_column.desc()
    else:
        order_by_column = order_by_column.asc()

    query = query.order_by(order_by_column)

    return paginate(db, query)


@router.get("/{id}", response_model=schemas.Robot)
async def show(id: uuid.UUID, db: Session = Depends(get_db)):
    return repo.one(db, robot_id=id)


@router.post("/", response_model=schemas.Robot)
async def create(robot: schemas.RobotCreate, db: Session = Depends(get_db)):
    db_robot = repo.get_by_serial_number(db, serial_number=robot.serial_number)
    if db_robot:
        raise RequestValidationError(
            errors=[
                {
                    "type": "integrity_error",
                    "loc": ["body", "serial_number"],
                    "msg": "Robot with this serial number already exists",
                }
            ]
        )
    return repo.create(db, robot_create=robot)


@router.put("/{id}", response_model=schemas.Robot)
async def update(robot_id: uuid.UUID, robot: schemas.RobotUpdate, db: Session = Depends(get_db)):
    db_robot = repo.one(db, robot_id=robot_id)
    if not db_robot:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Robot not found")

    return repo.update(db, robot=db_robot, robot_update=robot)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def destroy(id: uuid.UUID, db: Session = Depends(get_db)):
    db_robot = repo.one(db, robot_id=id)
    if not db_robot:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Robot not found")

    repo.destroy(db, robot_id=id)

    return {"ok": True}
