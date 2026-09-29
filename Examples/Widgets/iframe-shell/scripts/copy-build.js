const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "../build");
const targets = [
  path.resolve(__dirname, "../../../../widgets"),
  path.resolve(__dirname, "../../../../docs/widgets")
];

const files = fs
  .readdirSync(buildDir)
  .filter((name) => name.endsWith(".js") && !name.endsWith(".ts"));

targets.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
  files.forEach((name) => {
    fs.copyFileSync(path.join(buildDir, name), path.join(dir, name));
  });
});
