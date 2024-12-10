import React, { useState } from 'react';
import { View, UIManager, Platform, PanResponder } from 'react-native';
import type { SliderProps } from './types';
import { styles } from './styles';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CustomSlider: React.FC<SliderProps> = ({
  value,
  minimumValue,
  maximumValue,
  onValueChange,
  customStep,
  style,
  trackStyle,
  thumbStyle,
  filledTrackStyle,
}) => {
  const [sliderWidth, setSliderWidth] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => {
      const step = customStep || 1;
      const rawValue =
        minimumValue +
        ((gestureState.moveX - 40) / sliderWidth) *
          (maximumValue - minimumValue);
      const steppedValue = Math.round(rawValue / step) * step;
      const newValue = Math.min(
        Math.max(steppedValue, minimumValue),
        maximumValue
      );
      onValueChange(newValue);
    },
  });

  const thumbPosition =
    ((value - minimumValue) / (maximumValue - minimumValue)) * sliderWidth;

  return (
    <View
      testID="slider-container"
      style={[styles.container, style]}
      onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
    >
      <View
        testID="slider-track"
        style={[styles.track, { width: sliderWidth }, trackStyle]}
      />

      <View
        testID="slider-filled-track"
        style={[styles.filledTrack, { width: thumbPosition }, filledTrackStyle]}
      />

      <View
        testID="slider-thumb"
        {...panResponder.panHandlers}
        style={[
          styles.thumb,
          { transform: [{ translateX: thumbPosition - 10 }] },
          thumbStyle,
        ]}
      />
    </View>
  );
};
