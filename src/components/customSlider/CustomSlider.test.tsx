import { render, fireEvent } from '@testing-library/react-native';
import { CustomSlider } from './CustomSlider';

describe('CustomSlider', () => {
  const mockLayoutEvent = {
    nativeEvent: {
      layout: {
        width: 200,
      },
    },
  };

  it('should render correctly with default props', () => {
    const { getByTestId } = render(
      <CustomSlider
        value={50}
        customStep={5}
        minimumValue={0}
        maximumValue={100}
        onValueChange={jest.fn()}
      />
    );

    fireEvent(getByTestId('slider-container'), 'layout', mockLayoutEvent);

    expect(getByTestId('slider-container')).toBeTruthy();
  });

  it('should apply custom styles', () => {
    const customStyles = {
      trackStyle: { backgroundColor: 'gray' },
      thumbStyle: { backgroundColor: 'red' },
      filledTrackStyle: { backgroundColor: 'green' },
    };
    const { getByTestId } = render(
      <CustomSlider
        value={25}
        customStep={5}
        minimumValue={0}
        maximumValue={100}
        onValueChange={jest.fn()}
        trackStyle={customStyles.trackStyle}
        thumbStyle={customStyles.thumbStyle}
        filledTrackStyle={customStyles.filledTrackStyle}
      />
    );

    fireEvent(getByTestId('slider-container'), 'layout', mockLayoutEvent);

    const track = getByTestId('slider-track');
    const thumb = getByTestId('slider-thumb');
    const filledTrack = getByTestId('slider-filled-track');

    expect(track.props.style).toContainEqual(customStyles.trackStyle);
    expect(thumb.props.style).toContainEqual(customStyles.thumbStyle);
    expect(filledTrack.props.style).toContainEqual(
      customStyles.filledTrackStyle
    );
  });

  it('should calculate thumb position correctly', () => {
    const { getByTestId } = render(
      <CustomSlider
        value={50}
        customStep={5}
        minimumValue={0}
        maximumValue={100}
        onValueChange={jest.fn()}
      />
    );

    fireEvent(getByTestId('slider-container'), 'layout', mockLayoutEvent);

    const thumb = getByTestId('slider-thumb');
    const expectedPosition = (50 / 100) * 200 - 10;
    expect(thumb.props.style).toContainEqual({
      transform: [{ translateX: expectedPosition }],
    });
  });
});
