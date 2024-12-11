import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CustomSlider } from '../../customSlider';
import type { NumericInputQuestionProps } from '.';
import { styles } from './styles';

export const NumericInputQuestion: React.FC<NumericInputQuestionProps> = ({
  question,
  settings,
  currentAnswer,
  updateAnswer,
  customStyles,
}) => {
  const min = settings.min ?? 0;
  const max = settings.max ?? 100;
  const initialValue = settings.initValue ?? min;
  const sliderOnly = settings.sliderOnly ?? false;

  useEffect(() => {
    if (currentAnswer === undefined) {
      updateAnswer(question.questionId, initialValue);
    }
  }, [currentAnswer, question.questionId, initialValue, updateAnswer]);

  const handleChange = (value: number) => {
    updateAnswer(question.questionId, value);
  };

  return (
    <View style={[styles.container, customStyles?.container]}>
      {!sliderOnly ? (
        <TextInput
          testID="text-input"
          style={[styles.textInput, customStyles?.textInput]}
          textAlign="center"
          keyboardType="numeric"
          maxLength={max.toString().length}
          multiline={false}
          value={currentAnswer?.toString() || initialValue.toString()}
          onChangeText={(text) => {
            let numberValue = parseFloat(text) || 0;
            if (numberValue > max) {
              numberValue = max;
            }
            if (numberValue < min) {
              numberValue = min;
            }
            handleChange(numberValue);
          }}
        />
      ) : (
        <View
          testID="container"
          style={[
            styles.nonActiveInputContainer,
            customStyles?.nonActiveInputContainer,
          ]}
        >
          <Text style={[styles.valueDisplay, customStyles?.valueDisplay]}>
            {currentAnswer ?? min}
          </Text>
        </View>
      )}
      {!settings.noSlider && (
        <CustomSlider
          value={(currentAnswer as number) || min}
          minimumValue={min}
          maximumValue={max}
          customStep={1}
          onValueChange={handleChange}
          style={[styles.sliderContainer, customStyles?.sliderContainer]}
          trackStyle={[styles.sliderTrack, customStyles?.sliderTrack]}
          thumbStyle={[styles.sliderThumb, customStyles?.sliderThumb]}
        />
      )}
    </View>
  );
};
