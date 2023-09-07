import uuid
from typing import Tuple
from sqlalchemy import select, Select
from sqlalchemy.orm import Session

from .. import models, schemas


def create(db: Session, robot_create: schemas.RobotCreate) -> models.Robot:
    inst = models.Robot(**robot_create.model_dump())
    db.add(inst)
    db.commit()
    db.refresh(inst)
    return inst


def all() -> Select[Tuple[models.Robot]]:
    return select(models.Robot).order_by(models.Robot.created_at)


def one(db: Session, robot_id: uuid.UUID) -> models.Robot | None:
    return db.query(models.Robot).filter(models.Robot.id == robot_id).first()


def destroy(db: Session, robot_id: uuid.UUID) -> None:
    robot = one(db, robot_id=robot_id)
    db.delete(robot)
    db.commit()


def update(db: Session, robot: models.Robot, robot_update: schemas.RobotUpdate) -> models.Robot:
    update_data = robot_update.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(robot, key, value)

    db.commit()

    return robot


def get_by_serial_number(db: Session, serial_number: str) -> models.Robot | None:
    return db.query(models.Robot).filter(models.Robot.serial_number == serial_number).first()
