export enum CommandType {
  repos = "repos",
}

interface Command {
  name: string;
}

const commands: Array<Command> = [{ name: CommandType.repos }];

export default commands;
