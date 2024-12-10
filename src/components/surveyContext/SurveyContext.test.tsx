import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { SurveyProvider, useSurvey } from './SurveyContext';
import { Text, TouchableOpacity } from 'react-native';

const MockSurveyConsumer = () => {
  const {
    currentQuestionIndex,
    currentAnswers,
    goToNextQuestion,
    goToPreviousQuestion,
    updateAnswer,
    resetSurvey,
  } = useSurvey();

  return (
    <>
      <Text testID="current-question-index">
        {currentQuestionIndex.toString()}
      </Text>
      <Text testID="current-answers">{JSON.stringify(currentAnswers)}</Text>
      <TouchableOpacity onPress={goToNextQuestion} testID="next-button">
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToPreviousQuestion} testID="prev-button">
        <Text>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => updateAnswer('question1', 'answer1')}
        testID="update-answer-button"
      >
        <Text>Update Answer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetSurvey} testID="reset-button">
        <Text>Reset</Text>
      </TouchableOpacity>
    </>
  );
};

describe('SurveyProvider', () => {
  const renderWithProvider = (ui: React.ReactNode) =>
    render(<SurveyProvider>{ui}</SurveyProvider>);

  it('should provide the initial state', () => {
    renderWithProvider(<MockSurveyConsumer />);

    expect(screen.getByTestId('current-question-index').children[0]).toBe('0');
    expect(screen.getByTestId('current-answers').children[0]).toBe('{}');
  });

  it('should go to the next question', () => {
    renderWithProvider(<MockSurveyConsumer />);

    const nextButton = screen.getByTestId('next-button');
    fireEvent.press(nextButton);

    expect(screen.getByTestId('current-question-index').children[0]).toBe('1');
  });

  it('should not go to a negative question index when going to the previous question', () => {
    renderWithProvider(<MockSurveyConsumer />);

    const prevButton = screen.getByTestId('prev-button');
    fireEvent.press(prevButton);

    expect(screen.getByTestId('current-question-index').children[0]).toBe('0');
  });

  it('should update an answer', () => {
    renderWithProvider(<MockSurveyConsumer />);

    const updateButton = screen.getByTestId('update-answer-button');
    fireEvent.press(updateButton);

    expect(screen.getByTestId('current-answers').children[0]).toBe(
      JSON.stringify({ question1: 'answer1' })
    );
  });

  it('should reset the survey state', () => {
    renderWithProvider(<MockSurveyConsumer />);

    fireEvent.press(screen.getByTestId('next-button'));
    fireEvent.press(screen.getByTestId('update-answer-button'));

    expect(screen.getByTestId('current-question-index').children[0]).toBe('1');
    expect(screen.getByTestId('current-answers').children[0]).toBe(
      JSON.stringify({ question1: 'answer1' })
    );

    fireEvent.press(screen.getByTestId('reset-button'));

    expect(screen.getByTestId('current-question-index').children[0]).toBe('0');
    expect(screen.getByTestId('current-answers').children[0]).toBe('{}');
  });
});
