import type { InfoQuestionSettings, SurveyQuestion } from '../../types';

export type InfoQuestionProps = {
  question: SurveyQuestion;
  settings: InfoQuestionSettings;
  customStyles?: {
    questionText?: object;
    surveyDescription?: object;
  };
};
