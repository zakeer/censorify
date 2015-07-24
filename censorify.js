var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

function censor(inStr) {
	for(idx in censoredWord){
		inStr = inStr.replace(censoredWords[idx], " ****");
	}
	for(idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], " ****");	
	}

	return inStr;
};

function addCensorWord(word) {
	customCensoredWords.push(word);
};

function getCensorWord() {
	return censoredWords.concat(customCensoredWords);
};

exports.censor = censor;
exports.addCensorWord = addCensorWord;
exports.getCensorWord = getCensorWord; 