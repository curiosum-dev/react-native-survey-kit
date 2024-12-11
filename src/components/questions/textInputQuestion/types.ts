import type { SurveyQuestion, TextInputQuestionSettings } from '../../types';

export type TextInputQuestionProps = {
  question: SurveyQuestion;
  currentAnswer: string | undefined;
  settings: TextInputQuestionSettings;
  updateAnswer: (questionId: string, answer: string) => void;
  customStyles?: {
    textInput?: any;
  };
};
