import figlet from "figlet";
import chalk from "chalk";
import { setupCli } from "./cli";

/**
 * Prints a banner to the console.
 */
function printBanner() {
  console.log(
    figlet.textSync("Celesto!", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
    })
  );
  console.log(
    chalk.blueBright(
      "Celesto™ is an AI agent that helps you generate startup ideas.\n" +
        "Created by AdiPat, The Hackers Playbook. © All rights reserved.\n" +
        "For queries and feedback, please reach out to us at: "
    ) + chalk.yellowBright("contact.adityapatange@gmail.com")
  );
}

/**
 * Main function to run the SynthLite CLI.
 */
export async function main() {
  console.log("Welcome to Eureka!");
}
