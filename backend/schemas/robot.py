import uuid
import datetime

from pydantic import BaseModel


class RobotBase(BaseModel):
    name: str
    model: str
    software_version: str
    serial_number: str


class RobotCreate(RobotBase):
    pass


class RobotUpdate(RobotBase):
    id: uuid.UUID
    battery_health: int
    remaining_battery: int
    ip_address: str | None


class Robot(RobotBase):
    id: uuid.UUID
    battery_health: int
    remaining_battery: int
    ip_address: str | None

    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        orm_mode = True
