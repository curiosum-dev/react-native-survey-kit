import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type SurveyContextType = {
  currentQuestionIndex: number;
  currentAnswers: Record<string, number | string[]>;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  updateAnswer: (
    questionId: string,
    answer: string | number | string[]
  ) => void;
  resetSurvey: () => void;
};

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentAnswers, setCurrentAnswers] = useState<
    Record<string, number | string[]>
  >({});

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const updateAnswer = (questionId: string, answer: any) => {
    setCurrentAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const resetSurvey = () => {
    setCurrentQuestionIndex(0);
    setCurrentAnswers({});
  };

  return (
    <SurveyContext.Provider
      value={{
        currentQuestionIndex,
        currentAnswers,
        goToNextQuestion,
        goToPreviousQuestion,
        updateAnswer,
        resetSurvey,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error('useSurvey must be used within a SurveyProvider');
  }
  return context;
};
