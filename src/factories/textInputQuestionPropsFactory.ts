import * as Factory from 'factory.ts';
import type { TextInputQuestionProps } from '../components/questions';
import { SurveyQuestionFactory } from './surveyQuestionFactory';
import { TextInputQuestionSettingsFactory } from './textInputQuestionSettingsFactory';

export const TextInputQuestionPropsFactory =
  Factory.Sync.makeFactory<TextInputQuestionProps>({
    question: SurveyQuestionFactory.build(),
    currentAnswer: undefined,
    settings: TextInputQuestionSettingsFactory.build(),
    updateAnswer: jest.fn(),
    customStyles: { textInput: { color: 'blue' } },
  });
