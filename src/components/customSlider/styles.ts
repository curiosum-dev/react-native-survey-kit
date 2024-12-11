import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
  },
  track: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  filledTrack: {
    position: 'absolute',
    height: 4,
    backgroundColor: '#666',
    borderRadius: 2,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    position: 'absolute',
  },
});
