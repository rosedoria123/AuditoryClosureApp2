import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleStudyPress = () => {
    navigation.navigate('Study');
  };

  const handleQuizPress = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Flashcard Quiz App!</Text>
      <Text style={styles.subtitle}>What are Auditory Closures?</Text>
      <Text style={styles.description}>
        Auditory closures are psychological phenomena that occur when our brain fills in missing auditory information, allowing us to perceive complete sounds or words even if they are partially obscured or indistinct.
      </Text>
      <Text style={styles.description}>
        This app aims to help you improve your auditory closure skills through study materials and quizzes.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStudyPress}>
        <Text style={styles.buttonText}>Start Studying</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleQuizPress}>
        <Text style={styles.buttonText}>Take a Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
