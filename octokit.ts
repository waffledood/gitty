import { Octokit } from "octokit";
import { loadConfig } from "./config";

const ok = new Octokit({ auth: loadConfig().token });

export default ok;
