import "dotenv/config";

const config = {
  token: process.env.GITHUB_TOKEN || "",
  setupDone: false,
  username: "",
};

export default config;
