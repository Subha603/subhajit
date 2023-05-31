// Function to check if a character is a vowel



function isVowel(character) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(character.toLowerCase());
}

// Get the character from the user
const userCharacter = 'e';

// Check if the character is a vowel
if (userCharacter.length === 1) {
    if (isVowel(userCharacter)) {
        console.log(userCharacter + " is a vowel.");
    } else {
        console.log(userCharacter + " is a consonant.");
    }
} else {
    console.log("Please enter a single character.");
}

