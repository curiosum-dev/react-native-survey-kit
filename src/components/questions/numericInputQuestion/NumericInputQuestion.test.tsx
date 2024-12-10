import { render, fireEvent, screen } from '@testing-library/react-native';
import { NumericInputQuestion } from './NumericInputQuestion';
import type { NumericInputQuestionSettings } from '../../types';
import { NumericInputQuestionSettingsFactory } from '../../../factories/numericInputQuestionSettingsFactory';
import { NumericSurveyQuestionFactory } from '../../../factories/numericSurveyQuestionFactory';

describe('NumericInputQuestion', () => {
  const mockUpdateAnswer = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders text input and slider when sliderOnly is false', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build({
        sliderOnly: false,
      }),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings}
        currentAnswer={50}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    expect(screen.getByTestId('text-input')).toBeTruthy();
    expect(screen.queryByTestId('container')).toBeNull();
  });

  it('renders only the value display container when sliderOnly is true', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build({
        sliderOnly: true,
      }),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings}
        currentAnswer={50}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    expect(screen.getByTestId('container')).toBeTruthy();
    expect(screen.queryByTestId('text-input')).toBeNull();
  });

  it('calls updateAnswer with the initial value if currentAnswer is undefined', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build({
        initValue: 10,
      }),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings}
        currentAnswer={undefined}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    expect(mockUpdateAnswer).toHaveBeenCalledWith(
      question.questionId,
      settings?.initValue
    );
  });

  it('updates the value when text input is changed', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build(),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings}
        currentAnswer={50}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    const textInput = screen.getByTestId('text-input');
    fireEvent.changeText(textInput, '80');

    expect(mockUpdateAnswer).toHaveBeenCalledWith(question.questionId, 80);
  });

  it('clamps the value to the max when a higher value is entered', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build({
        max: 100,
      }),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings as NumericInputQuestionSettings}
        currentAnswer={50}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    const textInput = screen.getByTestId('text-input');
    fireEvent.changeText(textInput, '150');

    expect(mockUpdateAnswer).toHaveBeenCalledWith(
      question.questionId,
      settings?.max
    );
  });

  it('clamps the value to the min when a lower value is entered', () => {
    const question = NumericSurveyQuestionFactory.build({
      questionSettings: NumericInputQuestionSettingsFactory.build({
        min: 0,
      }),
    });
    const settings = question.questionSettings as NumericInputQuestionSettings;

    render(
      <NumericInputQuestion
        question={question}
        settings={settings as NumericInputQuestionSettings}
        currentAnswer={50}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    const textInput = screen.getByTestId('text-input');
    fireEvent.changeText(textInput, '-10');

    expect(mockUpdateAnswer).toHaveBeenCalledWith(
      question.questionId,
      settings?.min
    );
  });
});
