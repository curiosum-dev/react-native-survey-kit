import * as Factory from 'factory.ts';
import type { SurveyComponentProps } from '../components/surveyComponent';

export const SurveyComponentPropsFactory =
  Factory.Sync.makeFactory<SurveyComponentProps>({
    isVisible: true,
    onClose: jest.fn(),
    surveyData: [],
    modalAnimationType: 'slide',
    onSurveyComplete: jest.fn(),
    closeButtonText: 'Close',
  });
