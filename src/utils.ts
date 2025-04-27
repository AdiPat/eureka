import dotenv from "dotenv";

/**
 * Load environment variables from a .env file.
 * @param envPath - The path to the .env file. If not provided, it will look for a .env file in the current directory.
 */
export function loadEnv(envPath?: string): boolean {
  const dotenvLoadResult = dotenv.config({ path: envPath, override: true });

  if (!dotenvLoadResult || (dotenvLoadResult && dotenvLoadResult.error)) {
    throw new Error(
      `Failed to load environment variables from path: ${envPath}`
    );
  }

  return true;
}

/**
 * Convert a string to an underscore-cased, alphanumeric format.
 * @param input - The input string to format.
 * @returns The formatted string in underscore case.
 */
export function toUnderscoreCase(input: string): string {
  return input
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, "_") // Replace whitespace with underscores
    .replace(/[^a-zA-Z0-9_]/g, "") // Remove non-alphanumeric characters except underscores
    .toLowerCase(); // Convert to lowercase
}
