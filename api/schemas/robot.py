import enum
import uuid
import datetime

from pydantic import BaseModel


class RobotStatus(enum.Enum):
    IDLE = "IDLE"
    MOVING = "MOVING"
    PAUSED = "PAUSED"
    CHARGING = "CHARGING"
    ERROR = "ERROR"


class RobotBase(BaseModel):
    name: str
    model: str
    software_version: str
    serial_number: str
    ip_address: str


class RobotCreate(RobotBase):
    pass


class RobotUpdate(RobotBase):
    pass


class Robot(RobotBase):
    id: uuid.UUID
    created_at: datetime.datetime
    updated_at: datetime.datetime

    @property
    def battery_health(self) -> int:
        return 42

    @property
    def remaining_battery(self) -> int:
        return 42

    @property
    def system_status(self) -> RobotStatus:
        return RobotStatus.IDLE

    @property
    def connected(self) -> bool:
        return True

    class Config:
        from_attributes = True
