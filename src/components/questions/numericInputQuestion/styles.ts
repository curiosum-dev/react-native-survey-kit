import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { padding: 10, borderRadius: 10 },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 24,
    fontSize: 24,
    marginBottom: 24,
    alignSelf: 'center',
  },
  sliderContainer: {
    height: 30,
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
  },
  sliderThumb: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
  nonActiveInputContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: 16,
  },
  valueDisplay: {
    fontSize: 24,
    padding: 24,
    textAlign: 'center',
  },
});
