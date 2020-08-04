import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { MailtrapMailProvider } from "./../../providers/implementations/IMailtrapMailProvider";
import { PostgresUsersRepository } from "./../../repositories/implementations/PostgresUsersRepository";

const postgresUserRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
