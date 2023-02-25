const fs = require("fs");
const path = require("path");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("after:spec", (spec, results) => {
        fs.writeFileSync(
          "after_spec_results.json",
          JSON.stringify(results.tests)
        );
      });

      on("task", {
        createFolder: (path) => {
          return new Promise((resolve, reject) => {
            if (fs.existsSync(path)) {
              fs.rmdirSync(path);
            }
            fs.mkdir(path, (err) => {
              if (err) {
                return reject(err);
              }
              return resolve(null);
            });
          });
        },
        getFilesIn: (folderName) => {
          return fs.readdirSync(folderName);
        },
        deleteFilesIn(folderName) {
          console.log("deleting files in", folderName);
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                console.error(err);
                return reject(err);
              }
              for (const file of files) {
                if (file === ".gitignore") continue;
                fs.unlink(path.join(folderName, file), (err) => {
                  if (err) throw err;
                });
              }
              resolve(null);
            });
          });
        },
      });
    },
  },
  chromeWebSecurity: false,
});
