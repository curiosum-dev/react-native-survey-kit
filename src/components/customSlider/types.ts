export type SliderProps = {
  value: number;
  minimumValue: number;
  maximumValue: number;
  onValueChange: (value: number) => void;
  customStep: number;
  style?: object;
  trackStyle?: object;
  thumbStyle?: object;
  filledTrackStyle?: object;
};
