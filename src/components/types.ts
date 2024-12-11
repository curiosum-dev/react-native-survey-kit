import type { QuestionTypeKeys } from './surveyComponent';

export type SurveyData = SurveyQuestion[];

export type SurveyQuestion = {
  questionId: string;
  questionType: QuestionTypeKeys;
  questionText: string;
  required?: boolean;
  unsupportedQuestionText?: string;
  questionSettings?:
    | InfoQuestionSettings
    | TextInputQuestionSettings
    | SelectionGroupQuestionSettings
    | NumericInputQuestionSettings;
};

export type InfoQuestionSettings = {
  type: 'info';
  description?: string;
};

export type TextInputQuestionSettings = {
  type: 'text';
  maxLength?: number;
  placeholder?: string;
};

export type SelectionGroupQuestionSettings = {
  type: 'selectionGroup';
  maxMultiSelect?: number;
  options: { value: string; optionText: string }[];
};

export type NumericInputQuestionSettings = {
  type: 'numeric';
  min: number;
  max: number;
  step?: number;
  initValue?: number;
  sliderOnly?: boolean;
  noSlider?: boolean;
};
