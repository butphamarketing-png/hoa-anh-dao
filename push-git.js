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

run("git init");
run("git add .");
run('git commit -m "Initial commit: website Hoa Anh Dao preschool"');
run("git branch -M main");
try {
  run("git remote remove origin");
} catch {
  // ignore
}
run("git remote add origin https://github.com/butphammarketing-png/hoa-anh-dao.git");
run("git push -u origin main");
