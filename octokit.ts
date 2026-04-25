import { Octokit } from "octokit";
import { token } from "./config";

const ok = new Octokit({ auth: token });

export default ok;
