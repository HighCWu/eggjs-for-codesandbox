const path = require("path");
const Application = require("egg").Application;
const app = new Application({
  baseDir: path.join(__dirname, ".."),
  mode: "single"
});
app.ready(() => app.listen(8080));
