import "dotenv/config";

const config = {
  token: process.env.GITHUB_TOKEN || "",
};

export default config;
