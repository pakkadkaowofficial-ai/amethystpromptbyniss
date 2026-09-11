/**
 * AETHERIS — The Amethyst Ultrasonic Aromatherapy Console
 * Core TypeScript Definitions and Architectural Contracts
 *
 * Project: GE931 Introduction to Artificial Intelligence
 * Author: Pakamas Kajornsri (ID: 2610717302062)
 * Discipline: B.Eng. Computer Engineering and Artificial Intelligence
 */

export interface DimensionZeroShot {
  label: string;
  prompt: string;
  flaws: string[];
  assetWebp: string;
  fallbackImg?: string;
  caption: string;
}

export interface DimensionFewShot {
  label: string;
  prompt: string;
  highlights: string[];
  assetWebp: string;
  fallbackImg?: string;
  caption: string;
  tokens?: Record<string, string>;
}

export interface DimensionComparisonStrip {
  beforeLabel: string;
  afterLabel: string;
  paradigmShift: string;
  kpiDelta: string;
}

export interface DimensionComparison {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  discipline: string;
  categoryTag: string;
  summary: string;
  zeroShot: DimensionZeroShot;
  fewShot: DimensionFewShot;
  comparisonStrip: DimensionComparisonStrip;
}
