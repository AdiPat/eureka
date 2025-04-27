import { describe, it, expect, vi, beforeEach } from "vitest";
import { loadEnv } from "../utils";
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
});
