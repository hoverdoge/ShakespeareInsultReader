//thanks to https://www.scholastic.com/content/dam/teachers/articles/migrated-files-in-body/shakespeare_insult_kit.pdf for the words
//setting global word variables
let firstWord;
let secondWord;
let thirdWord;
let finalSentence;
//gets first word by picking with array
getFirstWord = () =>
{
  //array of all 50 first words
  let firstWords = ['artless', 'bawdy', 'beslubbering', 'bootless', 'churlish', 'cockered', 'clouted', 'craven', 'currish', 'dankish', 'dissembling', 'droning', 'errant', 'fawning', 'fobbing', 'froward', 'frothy', 'gleeking', 'goatish', 'gorbellied', 'impertinent', 'infectious', 'jarring', 'loggerheaded', 'lumpish', 'mammering', 'mangled', 'mewling', 'paunchy', 'pribbling', 'puking', 'puny', 'qualling', 'rank', 'reeky', 'roguish', 'ruttish', 'saucy', 'spleeny', 'spongy', 'surly', 'tottering', 'unmuzzled', 'vain', 'venomed', 'villainous', 'warped', 'wayward', 'weedy', 'yeasty', ];
  //gets random integer between 0-49(inclusive)
  firstNum = Math.floor(Math.random() * 50);
  //finds word
  firstWord = firstWords[firstNum];
}
//gets second word by picking with array
getSecondWord = () =>
{
  //array of all 50 second words
  let secondWords = ['base-court', 'bat-fowling', 'beef-witted', 'beetle-headed', 'boil-brained', 'clapper-clawed', 'clay-brained', 'common-kissing', 'crook-pated', 'dismal-dreaming', 'dizzy-eyed', 'doghearted', 'dread-bolted', 'earth-vexing', 'elf-skinned', 'fat-kidneyed', 'fen-sucked', 'flap-mouthed', 'fly-bitten', 'folly-fallen', 'fool-born', 'full-gorged', 'guts-griping', 'half-faced', 'hasty-witted', 'hedge-born', 'hell-hated', 'idle-headed', 'ill-breeding', 'ill-nurtured', 'knotty-pated', 'milk-livered', 'motley-minded', 'onion-eyed', 'plume-plucked', 'pottle-deep', 'pox-marked', 'reeling-ripe', 'rough-hewn', 'rude-growing', 'rump-fed', 'shard-borne', 'sheep-biting', 'spur-galled', 'swag-bellied', 'tardy-gaited', 'tickle-brained', 'toad-spotted', 'unchin-snouted', 'weather-bitten'];
  //gets random integer between 0-49(inclusive)
  secondNum = Math.floor(Math.random() * 50);
  //finds word
  secondWord = secondWords[secondNum];
}
//gets third word by picking with array
getThirdWord = () =>
{
  //array of all 50 third words
  let thirdWords = ['apple-john', 'baggage', 'barnacle', 'bladder', 'boar-pig', 'bugbear', 'bum-bailey', 'canker-blossom', 'clack-dish', 'clotpole', 'coxcomb', 'codpiece', 'death-token', 'dewberry', 'flap-dragon', 'flax-wench', 'flirt-gill', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 'haggard', 'harpy', 'hedge-pig', 'horn-beast', 'hugger-mugger', 'joithead', 'lewdster', 'lout', 'maggot-pie', 'malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 'nut-hook', 'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'ratsbane', 'scut', 'skainsmate', 'strumpet', 'varlot', 'vassal', 'whey-face', 'wagtail'];
  //gets random integer between 0-49(inclusive)
  thirdNum = Math.floor(Math.random() * 50);
  //finds word
  thirdWord = thirdWords[thirdNum];
}
//combines words for tts, stored in variable finalSentence
combine = () =>
{
  getFirstWord();
  getSecondWord();
  getThirdWord();
  finalSentence = ('Thou ' + firstWord + ' ' + secondWord + ' ' + thirdWord + '!');
}
//gets sentence, speaks and prints it
main = () =>
{
  combine();
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(finalSentence));
  console.log(finalSentence);
}
main();

