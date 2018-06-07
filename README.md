# Waterdeep CLI

CLI for fast access to scripts, homepage of this service at [Waterdeep](https://waterdeep.io)

For more information about Waterdeep visit the [About Page](https://waterdeep.io/about)

## Installation

On Mac/Linux run

`$ npm install -g waterdeep-cli`

## Usage

### Retrieve a file on waterdeep by "username/filename" and send it to stdout

`$ water get [username]/[filename]`

```
$ water get yasu/.gitconfig
[alias]
  po = "push origin"
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = "log --pretty=format:\"%h %ad %s%d [%an]\" --graph --date=short"
  pom = "pull origin master"
  rb = "pull --rebase origin master"

[core]
  editor = vim
  ignorecase = false
[credential]
  helper = osxkeychain
[push]
  default = matching
```

### Retrieves a list of files for a user

`$ water get [username]`

```
$ water get yasu
.gitconfig
.bash_aliases
update_template.sh
large_file.js
ClassComponent.jsx
prod-scripts
AboutWaterdeep.md
```

### See the CLI's help

`$ water --help`


### Create an account and upload files at

[Waterdeep](https://www.waterdeep.io)
