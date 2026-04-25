import "dotenv/config";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { homedir } from "os";
import { join } from "path";

export interface Config {
  username: string;
}

const configDir = join(homedir(), ".config", "gitty");
const configPath = join(configDir, "config.json");

export function loadConfig(): Config {
  if (!existsSync(configPath)) return { username: "" };
  return JSON.parse(readFileSync(configPath, "utf-8")) as Config;
}

export function saveConfig(config: Config): void {
  mkdirSync(configDir, { recursive: true });
  writeFileSync(configPath, JSON.stringify(config, null, 2));
}

export const token = process.env.GITHUB_TOKEN ?? "";
