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

export const celestioIdeaSchema = z.object({
  title: z.string(),
  description: z.string(),
  market: z.string(),
  implementation: z.string(),
  assets: z.array(z.string()),
  potentialChallenges: z.array(z.string()),
  potentialSolutions: z.array(z.string()),
  potentialRisks: z.array(z.string()),
  potentialMitigations: z.array(z.string()),
  potentialMarketSize: z.string(),
  metrics: z.array(
    z.object({
      totalAddressableMarket: z.string(),
      serviceableAddressableMarket: z.string(),
      serviceableObtainableMarket: z.string(),
      customerAcquisitionCost: z.string(),
      lifetimeValue: z.string(),
    })
  ),
});

export const celestioIdeasSchema = z.array(celestioIdeaSchema);
