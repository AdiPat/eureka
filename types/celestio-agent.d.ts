import { GenerateIdeasOptions } from "./models";
export declare class CelestioAgent {
    private verbose;
    constructor(options?: {
        verbose?: boolean;
    });
    private DEFAULT_SYSTEM_PROMPT;
    generateIdeas(options: GenerateIdeasOptions): Promise<void>;
    setVerbose(verbose: boolean): void;
    private storeIdeas;
}
