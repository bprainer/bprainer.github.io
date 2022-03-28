function textToAudio() {
	
	let randomWord = Math.floor(Math.random() * (9 - 1));
	switch (randomWord) {
		case 0:
			msg = "bionic";
			break;
		case 1:
			msg = "biology";
			break;
		case 2:
			msg = "brian";
			break;
		case 3:
			msg = "natalie";
			break;
		case 4:
			msg = "herman";
			break;
		case 5:
			msg = "ava";
			break;
		case 6:
			msg = "oliver";
			break;
		case 7:
			msg = "henley";
			break;
		case 8:
			msg = "holden";
			break;
		case 9:
			msg = "willow";
			break;
		default:
			msg = randomWord;
	}
	
	let speech = new SpeechSynthesisUtterance();
	let voices = window.speechSynthesis.getVoices()

	speech.lang = "en-US";
	speech.text = msg;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;  
	speech.voice = voices[7];
	console.log(randomWord);              
	console.log(msg);
	window.speechSynthesis.speak(speech);
}