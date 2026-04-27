import { Command } from "commander";
import { loadConfig, saveConfig } from "./config";
import { input, confirm, password } from "@inquirer/prompts";
import ok from "./octokit.js";

const program = new Command();
program.name("gitty").description("GitHub CLI tool").version("1.0.0");

const setup = program.command("setup").description("Setup gitty");

setup.action(async () => {
  const config = loadConfig();

  let username = await input({ message: "Enter your GitHub username:" });
  const confirmed = await confirm({
    message: `Username is ${username}, confirm?`,
  });

  if (!confirmed) {
    username = await input({ message: "Enter your GitHub username:" });
  }
  saveConfig({ ...config, username });

  const token = await password({
    message: "Enter your GitHub personal access token:",
  });
  saveConfig({ ...config, token });

  console.log("Setup complete.");
});

const repo = program.command("repo").description("Repository commands");

repo
  .command("list")
  .description("List your repositories")
  .action(async () => {
    const config = loadConfig();
    if (!config.username) {
      console.error("Run `gitty auth setup` first.");
      process.exit(1);
    }
    const response = await ok.request("GET /users/{username}/repos", {
      username: config.username,
      headers: { "X-GitHub-Api-Version": "2026-03-10" },
    });
    response.data.forEach(({ name }: { name: string }) => console.log(name));
  });

const config = program.command("config").description("Configuration commands");
config
  .command("--list")
  .description("Show current configuration")
  .action(() => {
    const config = loadConfig();
    console.log("Current configuration:");
    console.log(`Username: ${config.username}`);
    console.log(`Token: ${config.token}`);
  });

program.parse();
