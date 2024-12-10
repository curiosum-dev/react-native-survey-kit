import * as Factory from 'factory.ts';
import type { SelectionGroupQuestionSettings } from '../components/types';

export const SelectionGroupQuestionSettingsFactory =
  Factory.Sync.makeFactory<SelectionGroupQuestionSettings>({
    type: 'selectionGroup',
    maxMultiSelect: 2,
    options: [
      { value: '1', optionText: 'Option 1' },
      { value: '2', optionText: 'Option 2' },
      { value: '3', optionText: 'Option 3' },
      { value: '4', optionText: 'Option 4' },
    ],
  });
