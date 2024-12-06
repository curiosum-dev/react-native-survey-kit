import type { SurveyData } from '../types';

export type SurveyComponentProps = {
  isVisible: boolean;
  onClose: () => void;
  surveyData: SurveyData;
  modalAnimationType?: 'slide' | 'fade';
  closeButtonComponent?: React.ReactNode;
  closeButtonText?: string;
  textProps?: {
    surveyTitle?: React.ReactNode;
    errorText?: string;
    errorComponent?: React.ReactNode;
    previousButtonText?: string;
    nextButtonText?: string;
    finishButtonText?: string;
  };
  buttonProps?: {
    previousButton?: React.ReactNode;
    nextButton?: React.ReactNode;
    finishButton?: React.ReactNode;
  };
  unsupportedQuestionText?: string;
  customStyles?: SurveyComponentStyles;
  onSurveyComplete: (answers: Record<string, number | string[]>) => void;
};

export type CloseButtonStyles = {
  closeButtonTouchable: object;
  closeButtonText: object;
};

export type SurveyComponentStyles = {
  container?: object;
  errorText?: object;
  questionContainer?: object;
  questionText?: object;
  navButtons?: object;
  infoQuestion?: InfoQuestionStyles;
  textInputQuestion?: TextInputQuestionStyles;
  selectionGroupQuestion?: SelectionGroupQuestionStyles;
  numericInputQuestion?: NumericInputQuestionStyles;
  closeButtonProps?: CloseButtonStyles;
};

export type InfoQuestionStyles = {
  questionText?: object;
  surveyDescription?: object;
};

export type TextInputQuestionStyles = {
  container?: object;
  textInput?: object;
};

export type SelectionGroupQuestionStyles = {
  flatListContainer?: object;
  flatListContent?: object;
  optionButton?: object;
  selectedOption?: object;
  optionText?: object;
};

export type NumericInputQuestionStyles = {
  container?: object;
  sliderTrack?: object;
  sliderThumb?: object;
};
