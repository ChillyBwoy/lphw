import os

from typing import Optional
from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic.networks import PostgresDsn


class DatabaseConfig(BaseSettings):
    database: Optional[str] = None
    username: Optional[str] = None
    password: Optional[str] = None
    host: str = "0.0.0.0"
    port: int = 5432

    @property
    def url(self) -> PostgresDsn:
        return PostgresDsn.build(
            scheme="postgresql",
            username=self.username,
            password=self.password,
            host=self.host,
            port=self.port,
            path=self.database,
        )

    model_config = SettingsConfigDict(env_prefix="DB_")


class BaseConfig(BaseSettings):
    db: DatabaseConfig = DatabaseConfig()

    model_config = SettingsConfigDict(env_nested_delimiter="_")


class DevConfig(BaseConfig):
    model_config = SettingsConfigDict(env_file=(".env", ".dev.env"))


class ProdConfig(BaseConfig):
    model_config = SettingsConfigDict(env_file=(".env", ".prod.env"))


@lru_cache(maxsize=128)
def get_settings() -> DevConfig | ProdConfig:
    env = os.environ.get("ENV", "dev")

    if env == "dev":
        return DevConfig()
    elif env == "prod":
        return ProdConfig()
    else:
        raise ValueError(f"Unknown environment: {env}")
