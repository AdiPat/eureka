import fs from "fs";
import chalk from "chalk";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import {
  CelestioIdea,
  celestioIdeasSchema,
  GenerateIdeasOptions,
} from "./models";

import { toUnderscoreCase } from "./utils";

const DEFAULT_VERBOSE_ENABLED = false;

export class CelestioAgent {
  private verbose: boolean;

  constructor(options?: { verbose?: boolean }) {
    const { verbose = DEFAULT_VERBOSE_ENABLED } = options || {};

    if (verbose) {
      console.log(chalk.gray("Initializing Celesto!"));
    }

    this.verbose = verbose;

    if (verbose) {
      console.log(chalk.gray("Celesto initialized successfully!"));
    }
  }

  private DEFAULT_SYSTEM_PROMPT = `
    You are Celestio, an AI agent that helps users generate startup ideas.
    You have the experience of a McKinsey consultant with 20+ years of experience, and possess the technical knowledge of a Google engineer.
    You apply first principles thinking to break down complex problems into their most basic elements and then reassemble them in a new way.
    You consider current trends, emerging technologies, and user needs to identify unique opportunities.
    You are a master of brainstorming and idea generation, and you can help users come up with innovative and feasible startup ideas.
    You are also a great communicator and can explain complex concepts in simple terms.
    When you suggest ideas, you provide a detailed description of the idea, its potential market, and how it can be implemented.  
  `;

  async generateIdeas(options: GenerateIdeasOptions): Promise<void> {
    if (!options.topic) {
      throw new Error("Topic is required for idea generation.");
    }

    if (this.verbose) {
      console.log(chalk.gray(`Generating ideas for topic: ${options.topic}`));
    }

    const ideaGenerationPrompt = `
      Generate 5 startup ideas based on the following topic: '${options.topic}'.
      Please provide a detailed description of each idea, its potential market, and how it can be implemented.
    `;

    const { object: ideas } = await generateObject({
      model: openai("gpt-4.5-preview"),
      system: this.DEFAULT_SYSTEM_PROMPT,
      prompt: ideaGenerationPrompt,
      schema: celestioIdeasSchema,
    });

    if (this.verbose) {
      console.log(chalk.gray("Ideas generated successfully!"));
      console.log(chalk.gray("Ideas:", JSON.stringify(ideas, null, 2)));
    }

    await this.storeIdeas(ideas, options);
  }

  setVerbose(verbose: boolean): void {
    this.verbose = verbose;
    if (verbose) {
      console.log(chalk.gray("Verbose mode enabled."));
    } else {
      console.log(chalk.gray("Verbose mode disabled."));
    }
  }

  private async storeIdeas(
    ideas: CelestioIdea[],
    options: GenerateIdeasOptions
  ): Promise<void> {
    try {
      const timestamp = new Date().getTime();
      const kbPath = options.kb || "./knowledge_base";
      const topicFilename = toUnderscoreCase(options.topic);
      const ideasFolder = `${kbPath}/${topicFilename}`;
      const ideasFile = `${ideasFolder}/ideas_${timestamp}.json`;

      if (this.verbose) {
        console.log(chalk.gray(`Storing ideas at: ${ideasFile}.`));
      }

      await fs.promises.mkdir(kbPath, { recursive: true });
      await fs.promises.mkdir(ideasFolder, { recursive: true });
      await fs.promises.writeFile(ideasFile, JSON.stringify(ideas, null, 2));

      //if (this.verbose) {
      console.log(chalk.gray("Ideas stored successfully!"));
      //}
    } catch (error) {
      console.error("Error storing ideas:", error);
    }
  }
}
