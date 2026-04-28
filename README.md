# gitty 🤠

A TypeScript CLI for interacting with GitHub repositories, issues, and workflows from your terminal.

## Installation

### Prerequisites

- Node.js >= 20

```shell
$ npm i -g @waffledood/gitty
```

## First-time Setup

When using `gitty` for the first time, you will need to set it up. Run the command:

```shell
$ gitty auth setup
```

```shell
$ gitty auth setup
✔ Enter your GitHub username: cowboy-randy
✔ Username is cowboy-randy, confirm? Yes
✔ Enter your GitHub personal access token:
Setup complete.
```

## Usage

```shell
# List your GitHub repositories
$ gitty repo list

# Re-run setup (update username or token)
$ gitty auth setup

# Show all available commands
$ gitty --help
```
