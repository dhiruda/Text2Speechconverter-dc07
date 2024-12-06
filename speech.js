let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Fetch voices and populate the dropdown
window.speechSynthesis.addEventListener("voiceschanged", () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice

    // Populate select options with available voices
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Change the voice when a new option is selected
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});
