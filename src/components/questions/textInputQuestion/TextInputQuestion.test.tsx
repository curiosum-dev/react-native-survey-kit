import { render, fireEvent, screen } from '@testing-library/react-native';
import { TextInputQuestion } from './TextInputQuestion';
import { TextInputQuestionPropsFactory } from '../../../factories/textInputQuestionPropsFactory';

describe('TextInputQuestion', () => {
  const mockUpdateAnswer = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with the correct placeholder', () => {
    const props = TextInputQuestionPropsFactory.build();

    render(<TextInputQuestion {...props} />);
    const textInput = screen.getByPlaceholderText(
      props.settings.placeholder as string
    );

    expect(textInput).toBeTruthy();
  });

  it('displays the currentAnswer as the value', () => {
    const props = TextInputQuestionPropsFactory.build({
      currentAnswer: 'John Doe',
    });

    render(<TextInputQuestion {...props} />);
    const textInput = screen.getByDisplayValue('John Doe');

    expect(textInput).toBeTruthy();
  });

  it('calls updateAnswer with the correct value on text change', () => {
    const props = TextInputQuestionPropsFactory.build({
      currentAnswer: '',
      updateAnswer: mockUpdateAnswer,
    });

    render(<TextInputQuestion {...props} />);
    const textInput = screen.getByPlaceholderText(
      props.settings.placeholder as string
    );

    expect(textInput).toBeTruthy();

    fireEvent.changeText(textInput, 'Jane Doe');

    expect(mockUpdateAnswer).toHaveBeenCalledWith(
      props.question.questionId,
      'Jane Doe'
    );
  });

  it('applies custom styles correctly', () => {
    const props = TextInputQuestionPropsFactory.build();

    render(<TextInputQuestion {...props} />);
    const textInput = screen.getByPlaceholderText(
      props.settings.placeholder as string
    );

    expect(textInput.props.style).toContainEqual(props.customStyles?.textInput);
  });

  it('renders without crashing when currentAnswer is undefined', () => {
    const props = TextInputQuestionPropsFactory.build({
      currentAnswer: undefined,
    });

    render(<TextInputQuestion {...props} />);
    const textInput = screen.getByPlaceholderText(
      props.settings.placeholder as string
    );

    expect(textInput).toBeTruthy();
    expect(textInput.props.value).toBe('');
  });
});
