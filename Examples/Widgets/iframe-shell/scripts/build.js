const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const notesModules = path.resolve(root, "../Notes/node_modules");
const notesBin = path.join(notesModules, ".bin/webpack");
const webpackBin = fs.existsSync(notesBin) ? notesBin : "webpack";

const result = spawnSync(
  webpackBin,
  ["--config", path.join(root, "webpack.config.js")],
  {
    cwd: root,
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_PATH: [notesModules, process.env.NODE_PATH || ""].filter(Boolean).join(path.delimiter),
      NODE_OPTIONS: `${process.env.NODE_OPTIONS || ""} --openssl-legacy-provider`.trim()
    }
  }
);

if (result.status !== 0) {
  process.exit(result.status || 1);
}

require("./copy-build.js");
