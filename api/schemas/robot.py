import enum
import uuid
import datetime
from typing import Optional
from pydantic import field_validator, FieldValidationInfo

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
    ip_address: Optional[str] = None
    system_status: RobotStatus
    connected: Optional[bool] = False
    battery_health: Optional[int] = 100
    remaining_battery: Optional[int] = 100

    @field_validator("name", "model", "software_version", "serial_number")
    @classmethod
    def field_should_not_be_empty(cls, value: str, info: FieldValidationInfo) -> str:
        if len(value.strip()) == 0:
            raise ValueError(f"{info.field_name} should not be empty")
        return value

    @field_validator("ip_address")
    @classmethod
    def ip_address_fallback_to_null(cls, value: str | None):
        if value and value.strip() == "":
            return None
        return value


class RobotCreate(RobotBase):
    pass


class RobotUpdate(RobotBase):
    pass


class Robot(RobotBase):
    id: uuid.UUID
    created_at: datetime.datetime
    updated_at: datetime.datetime

    class Config:
        from_attributes = True
