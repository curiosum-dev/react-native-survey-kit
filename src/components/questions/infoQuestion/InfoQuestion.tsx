import { Text } from 'react-native';
import { styles } from './styles';
import type { InfoQuestionProps } from '.';

export const InfoQuestion: React.FC<InfoQuestionProps> = ({
  settings,
  customStyles,
}) => {
  return (
    <Text style={[styles.questionText, customStyles?.questionText]}>
      {settings.description}
    </Text>
  );
};
