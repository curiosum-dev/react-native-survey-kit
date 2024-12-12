import { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import {
  SurveyProvider,
  SurveyComponent,
  QuestionTypeKeys,
  type SurveyData,
} from 'react-native-survey-kit';

const App = () => {
  const [isSurveyVisible, setSurveyVisible] = useState(false);
  const [surveyResult, setSurveyResult] = useState<Record<
    string,
    string | string[] | number
  > | null>(null);

  const surveyData: SurveyData = [
    {
      questionId: 'q1',
      questionType: QuestionTypeKeys.Info,
      questionText: 'Welcome to the survey!',
      questionSettings: {
        type: QuestionTypeKeys.Info,
        description: 'Some description!',
      },
    },
    {
      questionId: 'q2',
      questionType: QuestionTypeKeys.TextInput,
      questionText: 'What is your name?',
      questionSettings: {
        type: QuestionTypeKeys.TextInput,
        maxLength: 100,
        placeholder: 'Enter your name',
      },
      required: true,
    },
    {
      questionId: 'q3',
      questionType: QuestionTypeKeys.SelectionGroup,
      questionText: 'Pick your favorite fruit',
      questionSettings: {
        type: QuestionTypeKeys.SelectionGroup,
        maxMultiSelect: 2,
        options: [
          { value: 'apple', optionText: 'Apple' },
          { value: 'banana', optionText: 'Banana' },
          { value: 'orange', optionText: 'Orange' },
          { value: 'grape', optionText: 'Grape' },
        ],
      },
      required: true,
    },
    {
      questionId: 'q4',
      questionType: QuestionTypeKeys.SelectionGroup,
      questionText: 'Select all your hobbies',
      questionSettings: {
        type: QuestionTypeKeys.SelectionGroup,
        maxMultiSelect: 1,
        options: [
          { value: 'reading', optionText: 'Reading' },
          { value: 'traveling', optionText: 'Traveling' },
          { value: 'cooking', optionText: 'Cooking' },
          { value: 'sports', optionText: 'Sports' },
        ],
      },
      required: false,
    },
    {
      questionId: 'q5',
      questionType: QuestionTypeKeys.NumericInput,
      questionText: 'Rate your experience with our service (0-10)',
      questionSettings: {
        type: QuestionTypeKeys.NumericInput,
        min: 0,
        max: 10,
        step: 1,
      },
      required: true,
    },
    {
      questionId: 'q6',
      questionType: QuestionTypeKeys.NumericInput,
      questionText: 'How many cups of water do you drink daily?',
      questionSettings: {
        type: 'numeric',
        min: 0,
        max: 20,
        sliderOnly: true,
      },
      required: true,
    },
    {
      questionId: 'q7',
      questionType: QuestionTypeKeys.SelectionGroup,
      questionText: 'Do you agree with our terms?',
      questionSettings: {
        type: QuestionTypeKeys.SelectionGroup,
        options: [
          { value: 'yes', optionText: 'Yes' },
          { value: 'no', optionText: 'No' },
        ],
      },
      required: true,
    },
    {
      questionId: 'q8',
      questionType: QuestionTypeKeys.SelectionGroup,
      questionText: 'Select your hobbies',
      questionSettings: {
        type: QuestionTypeKeys.SelectionGroup,
        maxMultiSelect: 3,
        options: [
          { value: 'reading', optionText: 'Reading' },
          { value: 'traveling', optionText: 'Traveling' },
          { value: 'cooking', optionText: 'Cooking' },
        ],
      },
      required: true,
    },
  ];

  const handleSurveyComplete = (answers: any) => {
    setSurveyResult(answers);
    setSurveyVisible(false);
  };

  return (
    <SurveyProvider>
      <View style={styles.container}>
        <Button title="Start Survey" onPress={() => setSurveyVisible(true)} />
        <SurveyComponent
          isVisible={isSurveyVisible}
          onClose={() => setSurveyVisible(false)}
          surveyData={surveyData}
          modalAnimationType="fade"
          onSurveyComplete={handleSurveyComplete}
          textProps={{
            surveyTitle: (
              <Text style={styles.surveyTitle}>My Custom Survey</Text>
            ),
            errorText: 'Please answer this question.',
            previousButtonText: 'Go Back',
            nextButtonText: 'Proceed',
            finishButtonText: 'Submit',
          }}
          buttonProps={{
            previousButton: (
              <Text style={styles.buttonText}>Previous Question</Text>
            ),
            nextButton: <Text style={styles.buttonText}>Next Question</Text>,
            finishButton: <Text style={styles.buttonText}>Finish Survey</Text>,
          }}
          customStyles={{
            container: styles.surveyContainer,
            closeButtonProps: {
              closeButtonTouchable: styles.closeButton,
              closeButtonText: styles.closeButtonText,
            },
          }}
          closeButtonText="End Survey"
        />
        {surveyResult && (
          <View>
            <Text>Survey Result:</Text>
            <Text>{JSON.stringify(surveyResult, null, 2)}</Text>
          </View>
        )}
      </View>
    </SurveyProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  surveyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 24,
  },
  surveyContainer: {
    padding: 20,
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  closeButtonText: {
    color: '#ff0000',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
