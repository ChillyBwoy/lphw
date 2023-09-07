import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from ..database import get_db
from .. import schemas

import repositories.robots as repo

router = APIRouter()


@router.get("/", response_model=list[schemas.Robot])
async def all(offset: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return repo.all(db, offset=offset, limit=limit)


@router.get("/{robot_id}", response_model=schemas.Robot)
async def one(robot_id: uuid.UUID, db: Session = Depends(get_db)):
    return repo.one(db, robot_id=robot_id)


@router.post("/", response_model=schemas.Robot)
async def create(robot: schemas.RobotCreate, db: Session = Depends(get_db)):
    db_robot = repo.get_by_serial_number(db, serial_number=robot.serial_number)
    if db_robot:
        raise HTTPException(status_code=400, detail="Robot with this serial number already exists")

    return repo.create(db, robot_create=robot)


@router.put("/{robot_id}", response_model=schemas.Robot)
async def update(robot: schemas.RobotUpdate, db: Session = Depends(get_db)):
    db_robot = repo.one(db, robot_id=robot.id)
    if not db_robot:
        raise HTTPException(status_code=404, detail="Robot not found")

    return repo.update(db, robot=db_robot, robot_update=robot)
