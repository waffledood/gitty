import ok from "./octokit";
import config from "./config";
import commands from "./commands";

import { input, confirm, search } from "@inquirer/prompts";

while (true) {
  // initial setup
  if (!config.setupDone) {
    console.log(
      "Welcome to gitty! As this is your first time using gitty, please follow through the setup process.",
    );

    var githubUsername = await input({
      message: "Enter your GitHub username:",
    });

    const confirmUsername = await confirm({
      message: `Your GitHub username is ${githubUsername}`,
    });

    if (!confirmUsername) {
      githubUsername = await input({
        message: "Enter your GitHub username:",
      });
    }

    config.username = githubUsername;
    config.setupDone = true;
  }

  // process input from user
  const command = await search({
    message: "Select a command",
    source: async (input, { signal }) => {
      if (!input) {
        return [];
      }

      return commands
        .filter((command) => command.name.startsWith(input))
        .map((command) => ({
          name: command.name,
          value: command.name,
        }));
    },
  });

  console.log("command:", command);

  const response = await ok.request("GET /users/{username}/repos", {
    username: config.username,
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

  const repos: string[] = [];

  response.data.forEach(({ name }) => {
    repos.push(name);
  });

  console.log(repos.splice(5).join("\n"));

  break;
}
