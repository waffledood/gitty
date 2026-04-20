import { Octokit } from "octokit";
import config from "./config";

const ok = new Octokit({
  auth: config.token,
});

export default ok;
