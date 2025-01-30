import express, { RequestHandler } from "express";
import { login, register } from "../controllers/authentication";

export default (router: express.Router) => {
  router.post("/auth/register", register as unknown as RequestHandler);
  router.post("/auth/login", login as unknown as RequestHandler);
};
