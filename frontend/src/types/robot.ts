export enum RobotStatus {
  IDLE = "IDLE",
  MOVING = "MOVING",
  PAUSED = "PAUSED",
  CHARGING = "CHARGING",
  ERROR = "ERROR",
}

export interface Robot {
  id: string;
  name: string;
  model: string;
  software_version: string;
  serial_number: string;
  ip_address: string | null;
  battery_health: number;
  remaining_battery: number;
  system_status: RobotStatus;
  connected: boolean;
}

export type RobotCreate = Pick<
  Robot,
  "name" | "model" | "software_version" | "serial_number" | "ip_address"
>;
