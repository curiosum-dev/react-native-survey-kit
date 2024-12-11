import { render, screen } from '@testing-library/react-native';
import { SurveyComponent } from './SurveyComponent';
import { SurveyProvider } from '../surveyContext';
import { SurveyQuestionFactory } from '../../factories';
import type { QuestionTypeKeys } from '../questionTypeKeys';
import { SurveyComponentPropsFactory } from '../../factories/surveyComponentPropsFactory';
import { Text } from 'react-native';

const mockSurveyData = SurveyQuestionFactory.buildList(2);

describe('SurveyComponent', () => {
  it('renders the current question', () => {
    render(
      <SurveyProvider>
        <SurveyComponent
          surveyData={mockSurveyData}
          isVisible={true}
          onClose={jest.fn()}
          onSurveyComplete={jest.fn()}
        />
      </SurveyProvider>
    );

    expect(
      screen.getByText(mockSurveyData[0]?.questionText as string)
    ).toBeTruthy();
  });

  it('renders with customized survey data', () => {
    const customSurveyData = [
      {
        questionId: 'q1',
        questionType: 'text' as QuestionTypeKeys,
        questionText: 'Custom question?',
        required: false,
        questionSettings: { placeholder: 'Answer here' },
      },
    ];
    const props = SurveyComponentPropsFactory.build({
      surveyData: customSurveyData,
    });

    render(
      <SurveyProvider>
        <SurveyComponent {...props} />
      </SurveyProvider>
    );

    expect(screen.getByText('Custom question?')).toBeTruthy();
  });

  it('renders custom close button component if provided', () => {
    const customSurveyData = [
      {
        questionId: 'q1',
        questionType: 'text' as QuestionTypeKeys,
        questionText: 'Custom question?',
        required: false,
        questionSettings: { placeholder: 'Answer here' },
      },
    ];
    const props = SurveyComponentPropsFactory.build({
      surveyData: customSurveyData,
    });
    const customCloseButton = <Text>Custom Close</Text>;
    render(
      <SurveyProvider>
        <SurveyComponent {...props} closeButtonComponent={customCloseButton} />
      </SurveyProvider>
    );

    expect(screen.getByText('Custom Close')).toBeTruthy();
  });
});
