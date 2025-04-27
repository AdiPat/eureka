import { describe, it, expect, vi, beforeEach } from "vitest";
import { loadEnv, toUnderscoreCase } from "../utils";
import path from "path";

describe("utils", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("loadEnv", () => {
    it("should load env successfully when path is provided", () => {
      const testPath = path.resolve(process.cwd(), ".env.test");
      const loadStatus = loadEnv(testPath);
      expect(loadStatus).toBe(true);
    });

    it("should fail to load env when an invalid path is provided", () => {
      const invalidPath = "/invalid/path/.env";

      expect(() => {
        loadEnv(invalidPath);
      }).toThrowError(
        "Failed to load environment variables from path: /invalid/path/.env"
      );
    });
  });

  describe("toUnderscoreCase", () => {
    it("should convert string with alphanumeric characters to underscore case", () => {
      const input = "Hello World 2023";
      const expectedOutput = "hello_world_2023";
      const result = toUnderscoreCase(input);
      expect(result).toBe(expectedOutput);
    });

    it("should convert string with special characters to underscore case", () => {
      const input = "Hello World!";
      const expectedOutput = "hello_world";
      const result = toUnderscoreCase(input);
      expect(result).toBe(expectedOutput);
    });

    it("should handle leading and trailing whitespace", () => {
      const input = "   Hello World!   ";
      const expectedOutput = "hello_world";
      const result = toUnderscoreCase(input);
      expect(result).toBe(expectedOutput);
    });

    it("should handle multiple spaces between words", () => {
      const input = "Hello    World 2023";
      const expectedOutput = "hello_world_2023";
      const result = toUnderscoreCase(input);
      expect(result).toBe(expectedOutput);
    });

    it("should handle non-alphanumeric characters", () => {
      const input = "Hello@World#2023!";
      const expectedOutput = "helloworld2023";
      const result = toUnderscoreCase(input);
      expect(result).toBe(expectedOutput);
    });
  });
});
