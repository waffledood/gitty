import ok from "./octokit";

const owner = "waffledood";
const repo = "gitty";

const response = await ok.request("GET /users/{username}/repos", {
  username: owner,
  headers: {
    "X-GitHub-Api-Version": "2026-03-10",
  },
});

const repos: string[] = [];

response.data.forEach(({ name }) => {
  repos.push(name);
});

console.log(repos.join("\n"));
