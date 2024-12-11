import { render, fireEvent, screen } from '@testing-library/react-native';
import { SelectionGroupQuestion } from './SelectionGroupQuestion';
import type { SelectionGroupQuestionSettings } from '../../types';
import { SurveyQuestionFactory } from '../../../factories';
import { SelectionGroupQuestionSettingsFactory } from '../../../factories/selectionGroupQuestionSettingsFactory';

describe('SelectionGroupQuestion', () => {
  const mockUpdateAnswer = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders options correctly', () => {
    const question = SurveyQuestionFactory.build();
    const settings = SelectionGroupQuestionSettingsFactory.build();

    render(
      <SelectionGroupQuestion
        question={question}
        settings={settings as SelectionGroupQuestionSettings}
        currentAnswer={undefined}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    settings.options.forEach((option) => {
      expect(screen.getByText(option.optionText)).toBeTruthy();
    });
  });

  it('selects a single option when isMultiSelect is false', () => {
    const question = SurveyQuestionFactory.build();
    const settings = SelectionGroupQuestionSettingsFactory.build();

    render(
      <SelectionGroupQuestion
        question={question}
        settings={settings as SelectionGroupQuestionSettings}
        currentAnswer={undefined}
        updateAnswer={mockUpdateAnswer}
        customStyles={{}}
      />
    );

    const option = settings.options[0];
    const optionButton = screen.getByText(option?.optionText as string);

    fireEvent.press(optionButton);
    fireEvent.press(optionButton);

    expect(mockUpdateAnswer).toHaveBeenCalledWith(question.questionId, [
      option?.value,
    ]);
  });
});
