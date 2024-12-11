import * as Factory from 'factory.ts';
import type { SurveyQuestion } from '../components/types';
import type { QuestionTypeKeys } from '../components/questionTypeKeys';
import { NumericInputQuestionSettingsFactory } from './numericInputQuestionSettingsFactory';

export const SurveyQuestionFactory = Factory.Sync.makeFactory<SurveyQuestion>({
  questionId: '1',
  questionType: 'numeric' as QuestionTypeKeys,
  questionText: 'How old are you?',
  required: true,
  questionSettings: NumericInputQuestionSettingsFactory.build(),
});
