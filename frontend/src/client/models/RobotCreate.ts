/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RobotStatus } from "./RobotStatus";

export type RobotCreate = {
  name: string;
  model: string;
  software_version: string;
  serial_number: string;
  ip_address?: string | null;
  system_status: RobotStatus;
};
