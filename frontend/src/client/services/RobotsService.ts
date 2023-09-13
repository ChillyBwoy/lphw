/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_Robot_ } from "../models/Page_Robot_";
import type { Robot } from "../models/Robot";
import type { RobotCreate } from "../models/RobotCreate";
import type { RobotStatus } from "../models/RobotStatus";
import type { RobotUpdate } from "../models/RobotUpdate";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class RobotsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List
   * @returns Page_Robot_ Successful Response
   * @throws ApiError
   */
  public list({
    systemStatus,
    connected,
    orderBy,
    orderDirection,
    page = 1,
    size = 50,
  }: {
    systemStatus?: RobotStatus | null;
    connected?: boolean | null;
    orderBy?: string | null;
    orderDirection?: string | null;
    /**
     * Page number
     */
    page?: number;
    /**
     * Page size
     */
    size?: number;
  }): CancelablePromise<Page_Robot_> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/robots/",
      query: {
        system_status: systemStatus,
        connected: connected,
        order_by: orderBy,
        order_direction: orderDirection,
        page: page,
        size: size,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Create
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public create({ requestBody }: { requestBody: RobotCreate }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "POST",
      url: "/api/v1/robots/",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Show
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public show({ id }: { id: string }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "GET",
      url: "/api/v1/robots/{id}",
      path: {
        id: id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Update
   * @returns Robot Successful Response
   * @throws ApiError
   */
  public update({ robotId, requestBody }: { robotId: string; requestBody: RobotUpdate }): CancelablePromise<Robot> {
    return this.httpRequest.request({
      method: "PUT",
      url: "/api/v1/robots/{id}",
      query: {
        robot_id: robotId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        422: `Validation Error`,
      },
    });
  }

  /**
   * Destroy
   * @returns void
   * @throws ApiError
   */
  public destroy({ id }: { id: string }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/api/v1/robots/{id}",
      path: {
        id: id,
      },
      errors: {
        422: `Validation Error`,
      },
    });
  }
}
