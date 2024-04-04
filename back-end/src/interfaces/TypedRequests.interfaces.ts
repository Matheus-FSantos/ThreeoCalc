import express from "express";
import { Query } from 'express-serve-static-core';

export interface TypedRequest<T extends Query, U> extends express.Request {
  query: T
  body: U
}

export interface TypedRequestBody<U> extends express.Request {
  body: U
}
