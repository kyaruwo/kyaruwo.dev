import { unlinkSync } from "fs";
import { replaceInFileSync } from "replace-in-file";

const build = "../_builds/kyaruwo.dev/build";

try {
  unlinkSync(build + "/_app/env.js");
  console.log("rem: env.js");

  replaceInFileSync({
    files: build + "/404.html",
    from: /"\.\//g,
    to: '"/',
  });
  console.log("rei: 404.html");
} catch (error) {
  console.error("Error occurred:", error);
}
