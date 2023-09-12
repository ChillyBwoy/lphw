/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RobotStatus } from "./RobotStatus";

export type RobotUpdate = {
  name: string;
  model: string;
  software_version: string;
  serial_number: string;
  ip_address?: string | null;
  system_status: RobotStatus;
  connected?: boolean | null;
  battery_health?: number | null;
  remaining_battery?: number | null;
};
