import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "fs";
import { generateObject } from "ai";
import { CelestioAgent } from "../celestio-agent";

vi.mock("ai", () => ({
  generateObject: vi.fn(),
}));

vi.mock("fs", () => ({
  default: {
    promises: {
      mkdir: vi.fn(),
      writeFile: vi.fn(),
    },
  },
}));

describe("CelestioAgent", () => {
  let consoleLogSpy: any;
  let consoleErrorSpy: any;

  beforeEach(() => {
    vi.clearAllMocks();
    consoleLogSpy = vi.spyOn(console, "log");
    consoleErrorSpy = vi.spyOn(console, "error");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  describe("constructor", () => {
    it("should log initialization messages when verbose is true", () => {
      new CelestioAgent({ verbose: true });
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining("Initializing Celesto!")
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining("Celesto initialized successfully!")
      );
    });
  });

  describe("generateIdeas", () => {
    const mockIdeas = [
      {
        title: "AI-Powered Health Monitor",
        description: "Personal health monitoring system using AI",
        market: "Healthcare Technology",
        implementation: "Mobile app with ML models",
      },
      {
        title: "Smart Learning Platform",
        description: "Adaptive learning system",
        market: "EdTech",
        implementation: "Web platform with AI algorithms",
      },
    ];

    beforeEach(() => {
      (generateObject as any).mockResolvedValue({
        object: mockIdeas,
      });
    });

    it("should generate ideas for a valid topic", async () => {
      const agent = new CelestioAgent();
      await agent.generateIdeas({ topic: "AI" });

      expect(generateObject).toHaveBeenCalledWith(
        expect.objectContaining({
          prompt: expect.stringContaining("AI"),
        })
      );
    });

    it("should throw error when topic is missing", async () => {
      const agent = new CelestioAgent();
      await expect(agent.generateIdeas({} as any)).rejects.toThrow(
        "Topic is required for idea generation."
      );
    });

    it("should store ideas in the specified knowledge base directory", async () => {
      const agent = new CelestioAgent();
      const kbPath = "./custom_kb";

      await agent.generateIdeas({ topic: "AI", kb: kbPath });

      expect(fs.promises.mkdir).toHaveBeenCalledWith(kbPath, {
        recursive: true,
      });
      expect(fs.promises.writeFile).toHaveBeenCalledWith(
        expect.stringContaining(kbPath),
        expect.any(String)
      );
    });

    it("should handle file system errors gracefully", async () => {
      const fsError = new Error("File system error");
      (fs.promises.mkdir as any).mockRejectedValue(fsError);

      const agent = new CelestioAgent();
      await agent.generateIdeas({ topic: "AI" });

      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error storing ideas:",
        fsError
      );
    });

    it("should log verbose information when verbose mode is enabled", async () => {
      const agent = new CelestioAgent({ verbose: true });

      (fs.promises.mkdir as any).mockResolvedValue(undefined);
      (fs.promises.writeFile as any).mockResolvedValue(undefined);

      await agent.generateIdeas({ topic: "AI" });

      // Basic logs without dynamic parts
      const expectedLogs = [
        "Initializing Celesto!",
        "Celesto initialized successfully!",
        "Generating ideas for topic: AI",
        "Ideas generated successfully!",
        `Ideas: ${JSON.stringify(mockIdeas, null, 2)}`,
        /Storing ideas at: \.\/knowledge_base\/ai\/ideas_\d+\.json\./,
        "Ideas stored successfully!",
      ];

      expectedLogs.forEach((log, index) => {
        if (index + 1 == 6) {
          expect(consoleLogSpy).toHaveBeenNthCalledWith(
            index + 1,
            expect.stringMatching(log)
          );
          return;
        }

        expect(consoleLogSpy).toHaveBeenNthCalledWith(
          index + 1,
          expect.stringContaining(log as string)
        );
      });
    });
  });
});
