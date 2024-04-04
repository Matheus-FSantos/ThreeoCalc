import express from "express";

export interface MiddlewareRequest extends express.Request {
  userId?: string;
}
