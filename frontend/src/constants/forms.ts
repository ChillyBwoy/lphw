import type { Robot } from "@/client";

type RobotFormTextProps = {
  [key in keyof Robot]: {
    title: string;
    placeholder?: string;
  };
};

export const ROBOT_FORM_TEXT_PROPS: RobotFormTextProps = {
  id: {
    title: "ID",
  },
  name: {
    title: "Name",
    placeholder: "Name of the robot",
  },
  model: {
    title: "Model",
    placeholder: "Robot model",
  },
  software_version: {
    title: "Software Version",
    placeholder: "Robot software version",
  },
  serial_number: {
    title: "Serial Number",
    placeholder: "Robot serial number",
  },
  ip_address: {
    title: "IP Address",
    placeholder: "Robot IP address",
  },
  battery_health: {
    title: "Battery Health",
  },
  connected: {
    title: "Connected",
  },
  remaining_battery: {
    title: "Remaining Battery",
  },
  system_status: {
    title: "System Status",
  },
  created_at: {
    title: "Created At",
  },
  updated_at: {
    title: "Updated At",
  },
};

export const ROBOT_FORM_LAYOUT = {};
