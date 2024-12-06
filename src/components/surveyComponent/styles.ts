import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    paddingBottom: 64,
    paddingTop: 64,
    borderRadius: 10,
    backgroundColor: '#222',
  },
  questionText: {
    fontSize: 20,
    color: '#e0e0e0',
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  optionButton: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: '#4A90E2',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  defaultButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  optionText: {
    fontSize: 16,
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  questionContainer: {
    padding: 8,
    paddingTop: 24,
    paddingBottom: 24,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#808080',
    borderRadius: 16,
  },
  sliderContainer: {
    marginHorizontal: 20,
  },
  sliderTrack: {
    backgroundColor: 'lightgrey',
  },
  sliderThumb: {
    backgroundColor: 'blue',
  },
  closeButtonTouchable: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    marginBottom: 24,
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
  },
});
