import ok from "./octokit";
import config from "./config";

import { input } from "@inquirer/prompts";

if (!config.setupDone) {
  console.log(
    "Welcome to gitty! As this is your first time using gitty, please follow through the setup process.",
  );

  const githubUsername = await input({
    message: "Enter your GitHub username:",
  });

  config.username = githubUsername;
}

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

console.log(repos.splice(-5).join("\n"));
