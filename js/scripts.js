$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var words = sentence.split(" ")
    for (index = 0; index < words.length; index += 1) {
      var word = consonantmover(words[index]);
      word = word.concat("ay");
      word = word.join('');
      words[index] = word;
    };
    sentence = words.join(' ');
    $('#result').text(sentence);



  });
  var consonantmover = function(word) {
    var splitword = word.split('')
    var firstvowel = firstvowellocation(splitword);
    for (var i = 0; i < firstvowel; i += 1) {
      if (splitword[firstvowel-1]==='q') {
        splitword = splitword.concat(splitword[0]+'u');
        splitword.splice(0,firstvowel)
      } else {
        splitword = splitword.concat(splitword[i]);
      }

    }
    splitword.splice(0,firstvowel);
    return splitword
  }
  var firstvowellocation = function(word) {
    var vowels = ['a','e','i','o','u','y']
    if (word[0]==='y'){
      vowels = ['a','e','i','o','u']
    }
    for (var i = 0; i < word.length; i += 1 ) {
      for (var j=0; j < 6; j +=1) {
        if (word[i]===vowels[j]) {
          return i;
          break;
        };
      };
    };
  };




});
