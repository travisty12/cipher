function firstLast(inString) {
  return inString.charAt(0).toUpperCase() + inString.charAt(inString.length - 1).toUpperCase();
}

function lastFirst(inString) {
  return inString.charAt(1) + inString.charAt(0);
}

function encryptEnd(inString) {
  return inString + lastFirst(firstLast(inString));
}

function encryptStart(inString) {
  return inString.charAt(Math.floor(inString.length / 2) - 1) + inString;
}

function encryptFlip(inString) {
  var i;
  var result = ""
  for (i = 0; i < inString.length; i++) {
    result += inString.charAt((inString.length - 1 - i));
  }
  return result;
}

$(document).ready(function() {
  var originalSentence;
  $("#start").click(function() {
    originalSentence = prompt("Please enter a sentence to encrypt: ");
  });
  $("#decrypt").click(function() {
    alert(originalSentence);
  });
  $("#encrypt").click(function() {
    alert(encryptFlip(encryptStart(encryptEnd(originalSentence))));
  });
  originalSentence = "";
});
