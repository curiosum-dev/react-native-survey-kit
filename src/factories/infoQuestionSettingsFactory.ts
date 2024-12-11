import * as Factory from 'factory.ts';
import type { InfoQuestionSettings } from '../components/types';

export const InfoQuestionSettingsFactory =
  Factory.Sync.makeFactory<InfoQuestionSettings>({
    type: 'info',
    description: 'This is an informational question.',
  });
