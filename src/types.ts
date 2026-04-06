export type QuestionType = 'grammar' | 'reading' | 'listening';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
  vocabulary?: {
    word: string;
    definition: string;
  }[];
}

export interface TestSession {
  id: string;
  startTime: number;
  endTime?: number;
  answers: Record<string, string>; // questionId -> optionId
  score?: number;
}

export interface UserProgress {
  dailyStreak: number;
  totalStudyTime: number; // in minutes
  completedSessions: number;
  currentProficiency: string; // e.g., "B1", "B2"
  lastActiveDate: string; // ISO date
}
