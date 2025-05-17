/**
 * Load environment variables from a .env file.
 * @param envPath - The path to the .env file. If not provided, it will look for a .env file in the current directory.
 */
export declare function loadEnv(envPath?: string): boolean;
/**
 * Convert a string to an underscore-cased, alphanumeric format.
 * @param input - The input string to format.
 * @returns The formatted string in underscore case.
 */
export declare function toUnderscoreCase(input: string): string;
