const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ws = path.join(
  "C:/Users/Admin/Downloads",
  fs.readdirSync("C:/Users/Admin/Downloads").find((d) => d.includes("Hoa Anh"))
);
process.chdir(ws);

function run(cmd) {
  console.log(">>", cmd);
  execSync(cmd, { stdio: "inherit" });
}

try {
  run("git add -A");
  run('git commit -m "chore: remove temp push script"');
} catch {
  console.log("(commit skipped - nothing to commit or already committed)");
}

run("git push -u origin main");
