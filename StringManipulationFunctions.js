// String Manipulation 2, function to count characters in a string

function countChar(a){
    return a.length;
   }
   console.log(countChar("my name"))
   

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function sentenceCase(sentence){
    let words = sentence.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let capitalizedSentence = words.join(" ");
    console.log(capitalizedSentence);
}

sentenceCase("my name is stephen from kwara")

// Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}
reverseString('stephen')