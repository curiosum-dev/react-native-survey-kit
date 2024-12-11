import * as Factory from 'factory.ts';
import type { NumericInputQuestionSettings } from '../components/types';

export const NumericInputQuestionSettingsFactory =
  Factory.Sync.makeFactory<NumericInputQuestionSettings>({
    type: 'numeric',
    min: 0,
    max: 100,
    step: 1,
    initValue: 50,
    sliderOnly: false,
    noSlider: false,
  });
