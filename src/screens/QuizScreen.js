import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizScreen = () => {
  const questions = [
    {
      id: 1,
      question: 'Question 1: What is the capital of France?',
      options: [
        {
          id: '1a',
          text: 'Paris',
          isCorrect: true,
        },
        {
          id: '1b',
          text: 'London',
          isCorrect: false,
        },
        {
          id: '1c',
          text: 'Berlin',
          isCorrect: false,
        },
      ],
    },
    // Add more questions here...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreKeeper, setShowScoreKeeper] = useState(false);
  const [showAnswerResult, setShowAnswerResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleOptionPress = (isCorrect) => {
    if (isCorrect) {
      // Answer is correct
      setScore(score + 1);
      setIsAnswerCorrect(true);
      // Perform other necessary actions for a correct answer
    } else {
      // Answer is incorrect
      setIsAnswerCorrect(false);
      // Perform other necessary actions for an incorrect answer
    }

    // Show the answer result temporarily
    setShowAnswerResult(true);
    setTimeout(() => {
      setShowAnswerResult(false);
      // Move to the next question or show the score keeper
      if (currentQuestion === questions.length - 1) {
        setShowScoreKeeper(true);
      } else if (!isAnswerCorrect) {
        setCurrentQuestion(currentQuestion); // Reload current question
      } else {
        setCurrentQuestion(currentQuestion + 1); // Move to the next question
      }
    }, 1000); // Display for 1 second
  };

  const handleNextQuestion = () => {
    // Reset answer result and move to the next question
    setShowAnswerResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderOptions = (options) => {
    return options.map((option) => (
      <TouchableOpacity
        key={option.id}
        style={styles.optionContainer}
        onPress={() => handleOptionPress(option.isCorrect)}
      >
        <Text>{option.text}</Text>
      </TouchableOpacity>
    ));
  };

  const renderAnswerResult = () => {
    if (showAnswerResult) {
      return (
        <View style={styles.answerResultContainer}>
          <Text style={styles.answerResultText}>
            {isAnswerCorrect ? 'Correct!' : 'Try again'}
          </Text>
        </View>
      );
    }

    return null;
  };

  const renderScoreKeeper = () => {
    return (
      <View style={styles.scoreKeeperContainer}>
        <Text style={styles.scoreKeeperText}>Score: {score}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showScoreKeeper ? (
        renderScoreKeeper()
      ) : (
        <>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {renderOptions(questions[currentQuestion].options)}
          {renderAnswerResult()}
          {!isAnswerCorrect && !showAnswerResult && (
            <TouchableOpacity
              style={styles.reloadButton}
              onPress={() => setCurrentQuestion(currentQuestion)}
            >
              <Text style={styles.reloadButtonText}>Reload Question</Text>
            </TouchableOpacity>
          )}
          {currentQuestion !== questions.length - 1 && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextQuestion}
              disabled={!showAnswerResult}
            >
              <Text style={styles.nextButtonText}>Next Question</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  answerResultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  answerResultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreKeeperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    width: 200,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
  },
  scoreKeeperText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reloadButton: {
    backgroundColor: '#f2f2f2',
    width: 200,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  reloadButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#f2f2f2',
    width: 200,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizScreen;



