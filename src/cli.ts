import { Command } from "commander";
import { loadEnv } from "./utils";
import { CelestioAgent } from "./celestio-agent";

/**
 * Starts the interactive chat mode.
 * @param {any} options - Options for the chat mode.
 */
async function startChatMode(options: any) {
  // Placeholder for the chat function
  console.log("Starting chat mode with options:", options);
  // Implement the logic to start chat mode based on the provided options
}

/**
 * Sets up the CLI using Commander.js.
 * @returns {Command} The configured Command instance.
 */
export function setupCli() {
  const program = new Command();
  const celestio = new CelestioAgent({ verbose: true });

  program
    .name("celesto")
    .description("Celesto is an AI-powered startup idea generator!")
    .version("1.0.0");

  program
    .option("--env <path>", "Path to env file")
    .hook("preAction", (thisCommand) => {
      loadEnv(thisCommand.opts().env);
    });

  program
    .command("generate")
    .description("Generate startup ideas")
    .requiredOption("--topic <topic>", "Topic for idea generation")
    .option("--kb <path>", "Path to knowledge base folder")
    .option("--dump <path>", "Folder to dump knowledge base")
    .option("--assets <items>", "Assets to generate", (val) => val.split(","))
    .action(async (options) => {
      const generateIdeasOptions = {
        topic: options.topic,
        kb: options.kb,
        dump: options.dump,
        assets: options.assets,
      };
      await celestio.generateIdeas(generateIdeasOptions);
    });

  program
    .command("chat")
    .description("Start interactive chat mode")
    .option("--kb <path>", "Path to knowledge base folder")
    .option("--dump <path>", "Folder to dump knowledge base")
    .action(async (options) => {
      await startChatMode(options);
    });

  return program;
}
