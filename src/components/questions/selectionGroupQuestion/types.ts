import type {
  SelectionGroupQuestionSettings,
  SurveyQuestion,
} from '../../types';

export type SelectionGroupQuestionProps = {
  question: SurveyQuestion;
  currentAnswer: string | string[] | undefined;
  settings: SelectionGroupQuestionSettings;
  updateAnswer: (
    questionId: string,
    answer: string[] | string | number
  ) => void;
  customStyles?: {
    flatListContainer?: object;
    flatListContent?: object;
    optionButton?: object;
    selectedOption?: object;
    optionText?: object;
    matrixRow?: object;
    rowLabel?: object;
    matrixRowContent?: object;
  };
};
