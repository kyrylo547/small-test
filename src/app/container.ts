import "reflect-metadata";
import { Container } from "inversify";
import { AuthService } from "../core/AuthService";
import { TYPES } from "./types";

const container = new Container();

container.bind<AuthService>(TYPES.AuthService).to(AuthService);

export { container };
