import { TextInput } from 'react-native';
import type { TextInputQuestionProps } from '.';
import { styles } from './styles';

export const TextInputQuestion: React.FC<TextInputQuestionProps> = ({
  question,
  currentAnswer,
  updateAnswer,
  customStyles,
  settings,
}) => {
  return (
    <TextInput
      style={[styles.textInput, customStyles?.textInput]}
      placeholder={settings.placeholder}
      value={currentAnswer || ''}
      onChangeText={(text) => updateAnswer(question.questionId, text)}
    />
  );
};
