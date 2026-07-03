const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ws = path.join(
  "C:/Users/Admin/Downloads",
  fs.readdirSync("C:/Users/Admin/Downloads").find((d) => d.includes("Hoa Anh"))
);
process.chdir(ws);

execSync("git add -A", { stdio: "inherit" });
execSync('git commit -m "fix: hide translate bar and show 3 testimonial cards"', {
  stdio: "inherit",
});
execSync("git push origin main", { stdio: "inherit" });

console.log("Pushed.");
