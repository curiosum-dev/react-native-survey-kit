import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import type { SelectionGroupQuestionProps } from './types';

export const SelectionGroupQuestion: React.FC<SelectionGroupQuestionProps> = ({
  question,
  settings,
  currentAnswer,
  updateAnswer,
  customStyles,
}) => {
  const isMultiSelect = settings.maxMultiSelect !== undefined;
  const maxMultiSelect = settings.maxMultiSelect || Infinity;

  const handlePress = (value: string) => {
    let selectedValues = Array.isArray(currentAnswer) ? [...currentAnswer] : [];

    if (isMultiSelect) {
      if (selectedValues.includes(value)) {
        selectedValues = selectedValues.filter((v) => v !== value);
      } else {
        if (selectedValues.length < maxMultiSelect) {
          selectedValues.push(value);
        }
      }
    } else {
      selectedValues = [value];
    }

    updateAnswer(
      question.questionId,
      isMultiSelect ? selectedValues : (selectedValues[0] as string)
    );
  };

  const renderOption = (item: { value: string; optionText: string }) => (
    <TouchableOpacity
      style={[
        styles.optionButton,
        customStyles?.optionButton,
        isMultiSelect
          ? currentAnswer?.includes(item.value) && [
              styles.selectedOption,
              customStyles?.selectedOption,
            ]
          : currentAnswer === item.value && [
              styles.selectedOption,
              customStyles?.selectedOption,
            ],
      ]}
      onPress={() => handlePress(item.value)}
    >
      <Text style={[styles.optionText, customStyles?.optionText]}>
        {item.optionText}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, customStyles?.flatListContainer]}>
      <FlatList
        data={settings.options}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => renderOption(item)}
        contentContainerStyle={[
          styles.flatListContent,
          customStyles?.flatListContent,
        ]}
      />
    </View>
  );
};
