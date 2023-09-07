import uuid
from sqlalchemy.orm import Session

from .. import models, schemas


def create(db: Session, robot_create: schemas.RobotCreate) -> models.Robot:
    inst = models.Robot(name=robot_create.name)
    db.add(inst)
    db.commit()
    db.refresh(inst)
    return inst


def all(db: Session, offset: int = 0, limit: int = 100) -> list[models.Robot]:
    return db.query(models.Robot).offset(offset).limit(limit).all()


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
