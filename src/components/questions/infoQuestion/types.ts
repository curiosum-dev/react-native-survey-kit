import type { InfoQuestionSettings } from '../../types';

export type InfoQuestionProps = {
  settings: InfoQuestionSettings;
  customStyles?: {
    questionText?: object;
    surveyDescription?: object;
  };
};
