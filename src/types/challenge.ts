import { Difficulty } from './quiz';

export interface TestCase {
  description: string;
  call: string;
  expected: string;
}

export interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  tags: string[];
  initialCode: string;
  testCases: TestCase[];
  hint?: string;
}

export interface TestResult {
  description: string;
  passed: boolean;
  actual: string;
  expected: string;
}

export interface RunResult {
  logs: string[];
  testResults: TestResult[];
  error?: string;
  allPassed: boolean;
}
