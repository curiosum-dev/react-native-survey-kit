import * as Factory from 'factory.ts';
import type { TextInputQuestionSettings } from '../components/types';

export const TextInputQuestionSettingsFactory =
  Factory.Sync.makeFactory<TextInputQuestionSettings>({
    type: 'text',
    maxLength: 200,
    placeholder: 'Enter your response here',
  });
