import { render } from '@testing-library/react-native';
import { InfoQuestion } from './InfoQuestion';

describe('InfoQuestion', () => {
  it('should render correctly with provided settings', () => {
    const { getByText } = render(
      <InfoQuestion
        settings={{ type: 'info', description: 'Test description' }}
      />
    );
    expect(getByText('Test description')).toBeTruthy();
  });

  it('should apply custom styles when provided', () => {
    const customStyles = { questionText: { color: 'blue', fontSize: 20 } };
    const { getByText } = render(
      <InfoQuestion
        settings={{ type: 'info', description: 'Styled description' }}
        customStyles={customStyles}
      />
    );
    const text = getByText('Styled description');
    expect(text.props.style).toContainEqual(customStyles.questionText);
  });

  it('should not crash when customStyles is undefined', () => {
    const { getByText } = render(
      <InfoQuestion
        settings={{ type: 'info', description: 'No custom styles' }}
      />
    );
    expect(getByText('No custom styles')).toBeTruthy();
  });

  it('should handle empty description in settings', () => {
    const { queryByText } = render(
      <InfoQuestion settings={{ type: 'info', description: '' }} />
    );
    expect(queryByText('')).toBeTruthy();
  });
});
