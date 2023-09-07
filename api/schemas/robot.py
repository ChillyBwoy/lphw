import enum
import uuid
import datetime

from pydantic import BaseModel, computed_field


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

    @computed_field
    @property
    def battery_health(self) -> int:
        return 42

    @computed_field
    @property
    def remaining_battery(self) -> int:
        return 42

    @computed_field
    @property
    def system_status(self) -> RobotStatus:
        return RobotStatus.IDLE

    @computed_field
    @property
    def connected(self) -> bool:
        return True

    class Config:
        from_attributes = True
