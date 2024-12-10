import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useSurvey } from '../surveyContext/SurveyContext';
import {
  InfoQuestion,
  NumericInputQuestion,
  SelectionGroupQuestion,
  TextInputQuestion,
} from '../questions';
import type { SurveyComponentProps } from '.';
import { styles } from './styles';
import { QuestionTypeKeys } from '../questionTypeKeys';
import type {
  InfoQuestionSettings,
  NumericInputQuestionSettings,
  SelectionGroupQuestionSettings,
  TextInputQuestionSettings,
} from '../types';

export const SurveyComponent: React.FC<SurveyComponentProps> = ({
  isVisible,
  onClose,
  surveyData,
  modalAnimationType,
  textProps = {},
  buttonProps = {},
  customStyles = {},
  onSurveyComplete,
  closeButtonComponent,
  closeButtonText = 'Close Survey',
}) => {
  const {
    currentQuestionIndex,
    currentAnswers,
    goToNextQuestion,
    goToPreviousQuestion,
    updateAnswer,
    resetSurvey,
  } = useSurvey();
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = surveyData[currentQuestionIndex];

  const handlePrevious = () => {
    setError(null);
    goToPreviousQuestion();
  };

  const handleNext = () => {
    const answer = currentAnswers[currentQuestion?.questionId as string];

    if (
      currentQuestion?.required &&
      (answer === undefined ||
        (typeof answer === 'string' && answer === '') ||
        (Array.isArray(answer) && answer.length === 0))
    ) {
      setError(textProps.errorText || 'This question is required.');
      return;
    }

    setError(null);
    goToNextQuestion();
  };

  const handleFinish = () => {
    const answer = currentAnswers[currentQuestion?.questionId as string];

    if (
      currentQuestion?.required &&
      (answer === undefined ||
        (typeof answer === 'string' && answer === '') ||
        (Array.isArray(answer) && answer.length === 0))
    ) {
      setError(textProps.errorText || 'This question is required.');
      return;
    }

    setError(null);
    onSurveyComplete(currentAnswers);
    resetSurvey();
    onClose();
  };

  const handleClose = () => {
    resetSurvey();
    onClose();
  };

  const renderQuestion = () => {
    if (!currentQuestion) return null;

    const { questionType, questionSettings } = currentQuestion;

    switch (questionType) {
      case QuestionTypeKeys.Info:
        return (
          <InfoQuestion
            settings={questionSettings as InfoQuestionSettings}
            customStyles={customStyles.infoQuestion}
          />
        );
      case QuestionTypeKeys.TextInput:
        return (
          <TextInputQuestion
            question={currentQuestion}
            settings={questionSettings as TextInputQuestionSettings}
            currentAnswer={
              currentAnswers[currentQuestion.questionId] as string | undefined
            }
            updateAnswer={updateAnswer}
            customStyles={customStyles.textInputQuestion}
          />
        );
      case QuestionTypeKeys.SelectionGroup:
        return (
          <SelectionGroupQuestion
            question={currentQuestion}
            settings={questionSettings as SelectionGroupQuestionSettings}
            currentAnswer={
              currentAnswers[currentQuestion.questionId] as
                | string
                | string[]
                | undefined
            }
            updateAnswer={updateAnswer}
            customStyles={customStyles.selectionGroupQuestion}
          />
        );
      case QuestionTypeKeys.NumericInput:
        return (
          <NumericInputQuestion
            question={currentQuestion}
            settings={questionSettings as NumericInputQuestionSettings}
            currentAnswer={currentAnswers[currentQuestion.questionId] as number}
            updateAnswer={updateAnswer}
            customStyles={customStyles.numericInputQuestion}
          />
        );
      default:
        return (
          <Text>
            {currentQuestion.unsupportedQuestionText
              ? currentQuestion.unsupportedQuestionText
              : 'Unsupported question type'}
          </Text>
        );
    }
  };

  const renderError = () => {
    if (!error) return null;
    return textProps.errorComponent ? (
      textProps.errorComponent
    ) : (
      <Text style={[styles.errorText, customStyles.errorText]}>{error}</Text>
    );
  };

  const renderButton = (
    customButton: React.ReactNode,
    defaultText: string,
    onPress: () => void
  ) => {
    if (customButton) {
      return (
        <TouchableOpacity onPress={onPress}>{customButton}</TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={onPress} style={styles.defaultButton}>
        <Text style={styles.defaultButtonText}>{defaultText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={isVisible}
      animationType={modalAnimationType || 'slide'}
      transparent={true}
    >
      <View style={[styles.container, customStyles.container]}>
        {closeButtonComponent ? (
          <TouchableOpacity
            onPress={handleClose}
            style={[
              styles.closeButtonTouchable,
              customStyles.closeButtonProps?.closeButtonTouchable,
            ]}
          >
            {closeButtonComponent}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleClose}
            style={[
              styles.closeButtonTouchable,
              customStyles.closeButtonProps?.closeButtonTouchable,
            ]}
          >
            <Text
              style={[
                styles.closeButtonText,
                customStyles.closeButtonProps?.closeButtonText,
              ]}
            >
              {closeButtonText}
            </Text>
          </TouchableOpacity>
        )}
        {textProps.surveyTitle}
        <View
          style={[styles.questionContainer, customStyles.questionContainer]}
        >
          <Text style={[styles.questionText, customStyles.questionText]}>
            {currentQuestion?.questionText}
          </Text>
          {renderQuestion()}
          {renderError()}
        </View>
        <View style={[styles.navButtons, customStyles.navButtons]}>
          {currentQuestionIndex > 0 &&
            renderButton(
              buttonProps.previousButton,
              textProps.previousButtonText || 'Previous',
              handlePrevious
            )}
          {currentQuestionIndex < surveyData.length - 1 &&
            renderButton(
              buttonProps.nextButton,
              textProps.nextButtonText || 'Next',
              handleNext
            )}
          {currentQuestionIndex === surveyData.length - 1 &&
            renderButton(
              buttonProps.finishButton,
              textProps.finishButtonText || 'Finish',
              handleFinish
            )}
        </View>
      </View>
    </Modal>
  );
};
