import { z } from "zod";
/**
 * Options for generating business ideas
 */
export interface GenerateIdeasOptions {
    /** The main topic or domain for idea generation */
    topic: string;
    /** Optional knowledge base content to consider */
    kb?: string;
    /** Optional data dump to analyze */
    dump?: string;
    /** Optional list of relevant assets or resources */
    assets?: string[];
}
/**
 * Key business metrics for evaluating an idea
 */
export interface IdeaMetric {
    /** Total Available Market value estimation */
    totalAddressableMarket: string;
    /** Serviceable Available Market value estimation */
    serviceableAddressableMarket: string;
    /** Serviceable Obtainable Market value estimation */
    serviceableObtainableMarket: string;
    /** Estimated cost to acquire each customer */
    customerAcquisitionCost: string;
    /** Estimated lifetime value of each customer */
    lifetimeValue: string;
}
/**
 * Comprehensive business idea proposal structure
 */
export interface CelestioIdea {
    /** Name of the business idea */
    title: string;
    /** Detailed explanation of the idea */
    description: string;
    /** Target market analysis */
    market: string;
    /** Implementation strategy and details */
    implementation: string;
    /** List of required or available assets */
    assets: string[];
    /** Potential challenges in execution */
    potentialChallenges: string[];
    /** Proposed solutions to challenges */
    potentialSolutions: string[];
    /** Identified business risks */
    potentialRisks: string[];
    /** Risk mitigation strategies */
    potentialMitigations: string[];
    /** Estimated total market size */
    potentialMarketSize: string;
    /** Array of business metrics */
    metrics: IdeaMetric[];
}
export declare const celestioIdeaSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    market: z.ZodString;
    implementation: z.ZodString;
    assets: z.ZodArray<z.ZodString, "many">;
    potentialChallenges: z.ZodArray<z.ZodString, "many">;
    potentialSolutions: z.ZodArray<z.ZodString, "many">;
    potentialRisks: z.ZodArray<z.ZodString, "many">;
    potentialMitigations: z.ZodArray<z.ZodString, "many">;
    potentialMarketSize: z.ZodString;
    metrics: z.ZodArray<z.ZodObject<{
        totalAddressableMarket: z.ZodString;
        serviceableAddressableMarket: z.ZodString;
        serviceableObtainableMarket: z.ZodString;
        customerAcquisitionCost: z.ZodString;
        lifetimeValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }, {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    market: string;
    implementation: string;
    assets: string[];
    potentialChallenges: string[];
    potentialSolutions: string[];
    potentialRisks: string[];
    potentialMitigations: string[];
    potentialMarketSize: string;
    metrics: {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }[];
}, {
    title: string;
    description: string;
    market: string;
    implementation: string;
    assets: string[];
    potentialChallenges: string[];
    potentialSolutions: string[];
    potentialRisks: string[];
    potentialMitigations: string[];
    potentialMarketSize: string;
    metrics: {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }[];
}>;
export declare const celestioIdeasSchema: z.ZodArray<z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    market: z.ZodString;
    implementation: z.ZodString;
    assets: z.ZodArray<z.ZodString, "many">;
    potentialChallenges: z.ZodArray<z.ZodString, "many">;
    potentialSolutions: z.ZodArray<z.ZodString, "many">;
    potentialRisks: z.ZodArray<z.ZodString, "many">;
    potentialMitigations: z.ZodArray<z.ZodString, "many">;
    potentialMarketSize: z.ZodString;
    metrics: z.ZodArray<z.ZodObject<{
        totalAddressableMarket: z.ZodString;
        serviceableAddressableMarket: z.ZodString;
        serviceableObtainableMarket: z.ZodString;
        customerAcquisitionCost: z.ZodString;
        lifetimeValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }, {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    market: string;
    implementation: string;
    assets: string[];
    potentialChallenges: string[];
    potentialSolutions: string[];
    potentialRisks: string[];
    potentialMitigations: string[];
    potentialMarketSize: string;
    metrics: {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }[];
}, {
    title: string;
    description: string;
    market: string;
    implementation: string;
    assets: string[];
    potentialChallenges: string[];
    potentialSolutions: string[];
    potentialRisks: string[];
    potentialMitigations: string[];
    potentialMarketSize: string;
    metrics: {
        totalAddressableMarket: string;
        serviceableAddressableMarket: string;
        serviceableObtainableMarket: string;
        customerAcquisitionCost: string;
        lifetimeValue: string;
    }[];
}>, "many">;
