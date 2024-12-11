import * as Factory from 'factory.ts';
import type {
  NumericInputQuestionSettings,
  SurveyQuestion,
} from '../components/types';
import type { QuestionTypeKeys } from '../components/questionTypeKeys';

export const NumericSurveyQuestionFactory =
  Factory.Sync.makeFactory<SurveyQuestion>({
    questionId: '1',
    questionType: 'numeric' as QuestionTypeKeys,
    questionText: 'How old are you?',
    required: true,
    questionSettings: {
      type: 'numeric',
      min: 0,
      max: 100,
      initValue: 50,
      sliderOnly: false,
      noSlider: false,
    } as NumericInputQuestionSettings,
  });
