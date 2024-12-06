import type { NumericInputQuestionSettings, SurveyQuestion } from '../../types';

export type NumericInputQuestionProps = {
  question: SurveyQuestion;
  settings: NumericInputQuestionSettings;
  currentAnswer: string | number | undefined;
  updateAnswer: (questionId: string, answer: number) => void;
  customStyles?: {
    container?: object;
    textInput?: object;
    sliderContainer?: object;
    sliderTrack?: object;
    sliderThumb?: object;
    valueDisplay?: object;
    nonActiveInputContainer?: object;
  };
};
