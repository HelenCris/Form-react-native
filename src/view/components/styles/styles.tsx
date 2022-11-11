import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({ 
  container: {
    top: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignContent: 'center',
    top: 30
  },
  button: {
    backgroundColor: '#0082A9',
    width: '100%',
    textAlign: 'center',
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0082A9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center'
  },
  errorMessage: {
    top: 10,
    color: 'red',
    fontSize: 14,
  },
  textContainer: {
    top: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalText: {
    fontSize: 15
  },
  link: {
    fontWeight: "bold",
    fontSize: 15,
  },
  
  
})