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
