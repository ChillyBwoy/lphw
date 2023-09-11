/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RobotStatus } from "./RobotStatus";

export type Robot = {
  name: string;
  model: string;
  software_version: string;
  serial_number: string;
  ip_address: string | null;
  system_status: RobotStatus;
  id: string;
  created_at: string;
  updated_at: string;
  readonly battery_health: number;
  readonly remaining_battery: number;
  readonly connected: boolean;
};
