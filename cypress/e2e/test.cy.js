import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "https://rohithanss.github.io/", id: 0 }];

describe("Test", function () {
  let acc_score = 0;
  data.map(({ submission_link: url, id }) => {
    if (url && url.length) {
      this.beforeAll(() => {
        cy.task("createFolder", "cypress/downloads").then(() => {
          cy.log("Downloads folder created and ready for testing");
        });
      });
      beforeEach(() => {
        cy.visit(url);
      });

      it(`Take screenshots`, () => {
        cy.wait(1000);
        cy.get('[id="nav-menu"]').screenshot("Screenshot -- navbar", {
          capture: "viewport",
        });

        cy.get('[id="home"]').scrollIntoView();
        cy.wait(1000);
        cy.screenshot("Screenshot -- home", { capture: "viewport" });

        cy.get('[id="about"]').scrollIntoView();
        cy.wait(1000);
        cy.screenshot("Screenshot -- about", { capture: "viewport" });

        cy.get('[id="skills"]').scrollIntoView();
        cy.wait(1000);
        cy.screenshot("Screenshot -- skills", { capture: "viewport" });

        cy.get('[id="projects"]').scrollIntoView();
        cy.wait(1000);
        cy.screenshot("Screenshot -- projects", { capture: "viewport" });

        cy.get('[id="contact"]').scrollIntoView();
        cy.wait(1000);
        cy.screenshot("Screenshot -- contact", { capture: "viewport" });
      });

      it(`Submitted link should be a github.io link`, () => {
        cy.url().should("include", ".github.io/");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for basic components`, () => {
        cy.get('[id="nav-menu"]');
        cy.get('[id="about"]');
        cy.get('[id="skills"]');
        cy.get('[id="projects"]');
        cy.get('[id="contact"]');
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if navbar contains required components`, () => {
        cy.get(".nav-link.home");
        cy.get(".nav-link.about");
        cy.get(".nav-link.skills");
        cy.get(".nav-link.projects");
        cy.get(".nav-link.contact");
        cy.get(".nav-link.resume");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if navbar components are linked to respective elements`, () => {
        cy.isInViewport("#nav-menu");
        cy.get(".nav-link.about").click();
        cy.isScrolledTo("#about");
        cy.then(() => {
          acc_score += 1;
        });

        cy.visit(url);
        cy.isInViewport("#nav-menu");
        cy.get(".nav-link.skills").click();
        cy.isScrolledTo("#skills");
        cy.then(() => {
          acc_score += 1;
        });

        cy.visit(url);
        cy.isInViewport("#nav-menu");
        cy.get(".nav-link.projects").click();
        cy.isScrolledTo("#projects");
        cy.then(() => {
          acc_score += 1;
        });

        cy.visit(url);
        cy.isInViewport("#nav-menu");
        cy.get(".nav-link.contact").click();
        cy.isScrolledTo("#contact");
        cy.then(() => {
          acc_score += 1;
        });

        cy.isInViewport("#nav-menu");
        cy.get(".nav-link.home").click();
        cy.isScrolledTo("#home");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if name is included`, () => {
        cy.get('[id="user-detail-name"]').invoke("text").should("not.be.empty");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for introduction`, () => {
        cy.get('[id="user-detail-intro"]')
          .invoke("text")
          .should("not.be.empty");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for title in About Section`, () => {
        cy.get("#about.about.section").contains("About");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it("should check tech words", () => {
        cy.get("#about").within(($p) => {
          cy.wrap($p)
            .get("#user-detail-intro")
            .each((el) => {
              let text = el[0].innerText;
              let stack = [
                "MERN",
                "JavaScript",
                "MongoDB",
                "Frontend",
                "Backend",
                "java",
                "SQL",
                "NodeJS",
                "HTML",
                "CSS",
                "Express",
              ];

              let Stack_value = 0;
              for (let i = 0; i < stack.length; i++) {
                if (text.includes(stack[i])) {
                  Stack_value++;
                }
              }
              cy.expect(Stack_value).to.be.gte(2);
              cy.then(() => {
                acc_score += 1;
              });
            });
        });
      });

      it(`Check for professional photo`, () => {
        cy.get(".home-img").should("have.attr", "src");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Minimum of 4 projects must be present`, () => {
        cy.get(".project-card").then(($proj) => {
          expect(
            $proj.length,
            "Number of projects present in portfolio are not sufficient"
          ).to.be.at.least(4);
        });
        cy.then(() => {
          acc_score += 2;
        });
      });

      it(`Check for components in Projects Section`, () => {
        cy.get(".project-card").each(($proj) => {
          cy.wrap($proj).find("img").should("have.attr", "src");
          cy.wrap($proj)
            .find(".project-title")
            .invoke("text")
            .should("not.be.empty");
          cy.wrap($proj)
            .find(".project-description")
            .invoke("text")
            .should("not.be.empty");

          cy.wrap($proj).find(".project-tech-stack").should("not.be.empty");

          cy.wrap($proj).within(() => {
            cy.get(".project-github-link").then(($elem) => {
              checkLink($elem, ".project-github-link", "");
            });
          });

          cy.wrap($proj).within(() => {
            cy.get(".project-deployed-link").then(($elem) => {
              checkLink($elem, ".project-deployed-link", "");
            });
          });
        });
        cy.then(() => {
          acc_score += 4;
        });
      });

      it(`Check for components in Skills section`, () => {
        cy.get('[id="skills"]').within(() => {
          cy.get(".skills-card").each(($card) => {
            cy.wrap($card).find(".skills-card-img");
            cy.wrap($card).find(".skills-card-name");
          });
        });
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for links to GitHub and LinkedIn`, () => {
        cy.get('[id="contact-github"]').then(($elem) => {
          checkLink($elem, '[id="contact-github"]', "https://github.com/");
        });
        cy.then(() => {
          acc_score += 1;
        });

        cy.get('[id="contact-linkedin"]').then(($elem) => {
          checkLink(
            $elem,
            '[id="contact-linkedin"]',
            "https://www.linkedin.com/in/"
          );
        });
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if phone number is present`, () => {
        cy.get('[id="contact-phone"]').invoke("text").should("not.be.empty");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if email address is present`, () => {
        cy.get('[id="contact-email"]').invoke("text").should("not.be.empty");
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for GitHub calendar`, () => {
        cy.get(".react-activity-calendar").should((article) => {
          expect(article, "GitHub calendar heatmap not found").to.exist;
          expect(article).to.not.be.empty;
        });
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for GitHub streak stats`, () => {
        cy.get('[id="github-streak-stats"]')
          .should("have.attr", "src")
          .and(
            "include",
            "https://github-readme-streak-stats.herokuapp.com?user="
          );
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for GitHub top languages card`, () => {
        cy.get('[id="github-top-langs"]')
          .should("have.attr", "src")
          .and(
            "include",
            "https://github-readme-stats.vercel.app/api/top-langs/?username="
          );
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check for GitHub stats card`, () => {
        cy.get('[id="github-stats-card"]')
          .should("have.attr", "src")
          .and(
            "include",
            "https://github-readme-stats.vercel.app/api?username="
          );
        cy.then(() => {
          acc_score += 1;
        });
      });

      it(`Check if the resume buttons are within the respective sections`, () => {
        cy.get('[id="nav-menu"]').within(() => {
          cy.get('[id="resume-button-1"]');
        });

        cy.get('[id="home"],[id="about"]').within(() => {
          cy.get('[id="resume-button-2"]');
        });
        cy.then(() => {
          acc_score += 2;
        });
      });

      it(`Check if resume button in Resume section is downloading a PDF file`, () => {
        cy.task("deleteFilesIn", "cypress/downloads").then(() => {
          cy.get('[id="resume-button-1"]').then(($elem) => {
            if ($elem.find("a").length === 1) {
              cy.wrap($elem).within(() => {
                cy.get('[id="resume-link-1"]').then(($anchor) => {
                  checkLink($anchor, '[id="resume-link-1"]', "");
                });
                cy.get('[id="resume-link-1"]')
                  .invoke("removeAttr", "target")
                  .click();
                cy.url().then((currUrl) => {
                  expect(
                    currUrl,
                    `Could not open resume link in a new tab`
                  ).to.not.equal(url);
                });
                cy.go("back");
              });
            } else {
              cy.log("Testing for JS event listener");
              cy.window()
                .document()
                .then(function (doc) {
                  doc.addEventListener("click", () => {
                    setTimeout(function () {
                      doc.location.reload();
                    }, 5000);
                  });

                  /* Make sure the file exists */
                  cy.intercept("/", (req) => {
                    req.reply((res) => {
                      expect(res.statusCode).to.equal(200);
                    });
                  });
                });
              cy.get('[id="resume-button-1"]').click();
            }
            cy.then(() => {
              acc_score += 1;
            });
          });

          cy.wait(3000).then(() => {
            cy.task("getFilesIn", "cypress/downloads").then((after) => {
              expect(
                after.length,
                "Could not download resume. Please check if the download button is working as expected."
              ).to.be.eq(1);

              const fileName = after[0];
              expect(
                fileName.split(".").pop(),
                "Downloaded file is not in PDF format"
              ).to.be.eq("pdf");
              cy.then(() => {
                acc_score += 1;
              });
            });
          });
        });
      });

      it(`Check if resume button in Home/About section is downloading a PDF file`, () => {
        cy.task("deleteFilesIn", "cypress/downloads").then(() => {
          cy.get('[id="resume-button-2"]').then(($elem) => {
            if ($elem.find("a").length === 1) {
              cy.wrap($elem).within(() => {
                cy.get('[id="resume-link-2"]').then(($anchor) => {
                  checkLink($anchor, '[id="resume-link-2"]', "");
                });
                cy.get('[id="resume-link-2"]')
                  .invoke("removeAttr", "target")
                  .click({ force: true });
                cy.url().then((currUrl) => {
                  expect(
                    currUrl,
                    `Could not open resume link in a new tab`
                  ).to.not.equal(url);
                });
                cy.go("back");
              });
            } else {
              cy.log("Testing for JS event listener");
              cy.window()
                .document()
                .then(function (doc) {
                  doc.addEventListener("click", () => {
                    setTimeout(function () {
                      doc.location.reload();
                    }, 5000);
                  });

                  /* Make sure the file exists */
                  cy.intercept("/", (req) => {
                    req.reply((res) => {
                      expect(res.statusCode).to.equal(200);
                    });
                  });
                });
              cy.get('[id="resume-button-2"]').click({ force: true });
            }
            cy.then(() => {
              acc_score += 1;
            });
          });

          cy.wait(3000).then(() => {
            cy.task("getFilesIn", "cypress/downloads").then((after) => {
              expect(
                after.length,
                "Could not download resume. Please check if the download button is working as expected."
              ).to.be.eq(1);

              const fileName = after[0];
              expect(
                fileName.split(".").pop(),
                "Downloaded file is not in PDF format"
              ).to.be.eq("pdf");
              cy.then(() => {
                acc_score += 1;
              });
            });
          });
        });
      });
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });

  function checkLink(elem, anchorElem, includeLink) {
    // TODO: there's no need for anchorElem in the function calls
    if (elem.attr("href")) {
      // do anchor tag testing
      cy.log("Testing for anchor tag");
      cy.get(anchorElem)
        .should("have.attr", "href")
        .and("include", includeLink);

      // cy.get(anchorElem).invoke("attr", "target").should("eq", "_blank");
      if (includeLink !== "https://www.linkedin.com/in/") {
        cy.get(anchorElem).then((link) => {
          cy.log(link);
          cy.request(link.prop("href")).its("status").should("eq", 200);
        });
      }
      // } else {
      //   cy.window()
      //     .document()
      //     .then(function (doc) {
      //       doc.addEventListener("click", () => {
      //         setTimeout(function () {
      //           doc.location.reload();
      //         }, 5000);
      //       });

      //       /* Make sure the file exists */
      //       cy.intercept("/", (req) => {
      //         req.reply((res) => {
      //           expect(res.statusCode).to.equal(200);
      //         });
      //       });
      //     });
    }
  }
});
