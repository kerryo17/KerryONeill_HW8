/*
Name: Kerry O'Neill
Email address: kerry_oneill@student.uml.edu
Class: 91.61 GUI Programming I
I used this link: https://www.w3schools.com/html/html5_draganddrop.asp
to help me understand the drag and drop process.
*/

//for implementing tile 1
$(function () {
  $("#div1").draggable();

  $("#board1").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board2").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board3").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board4").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board5").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board6").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count").innerHTML = tiles[random_no1].count;
    },
  });

  $("#board7").droppable({
    accept: "#div1",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no1].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no1].value;
      document.getElementById("count1").innerHTML = tiles[random_no1].count;
    },
  });
});

//for implementing tile 2
$(function () {
  $("#div2").draggable();

  $("#board1").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board2").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board3").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board4").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board5").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board6").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count").innerHTML = tiles[random_no2].count;
    },
  });

  $("#board7").droppable({
    accept: "#div2",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no2].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no2].value;
      document.getElementById("count1").innerHTML = tiles[random_no2].count;
    },
  });
});

//for implementing tile 3
$(function () {
  $("#div3").draggable();

  $("#board1").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board2").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board3").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board4").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board5").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board6").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count").innerHTML = tiles[random_no3].count;
    },
  });

  $("#board7").droppable({
    accept: "#div3",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no3].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no3].value;
      document.getElementById("count1").innerHTML = tiles[random_no3].count;
    },
  });
});

//for implementing tile 4
$(function () {
  $("#div4").draggable();

  $("#board1").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board2").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board3").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board4").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board5").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board6").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count").innerHTML = tiles[random_no4].count;
    },
  });

  $("#board7").droppable({
    accept: "#div4",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no4].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no4].value;
      document.getElementById("count1").innerHTML = tiles[random_no4].count;
    },
  });
});

//for implementing tile 5
$(function () {
  $("#div5").draggable();

  $("#board1").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board2").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board3").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board4").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board5").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board6").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count").innerHTML = tiles[random_no5].count;
    },
  });

  $("#board7").droppable({
    accept: "#div5",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no5].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no5].value;
      document.getElementById("count1").innerHTML = tiles[random_no5].count;
    },
  });
});

//for implementing tile 6
$(function () {
  $("#div6").draggable();

  $("#board1").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board2").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board3").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board4").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board5").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board6").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count").innerHTML = tiles[random_no6].count;
    },
  });

  $("#board7").droppable({
    accept: "#div6",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no6].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no6].value;
      document.getElementById("count1").innerHTML = tiles[random_no6].count;
    },
  });
});

//for implementing tile 7
$(function () {
  $("#div7").draggable();

  $("#board1").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board2").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board3").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board4").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board5").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board6").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count").innerHTML = tiles[random_no7].count;
    },
  });

  $("#board7").droppable({
    accept: "#div7",
    drop: function () {
      document.getElementById("letter1").innerHTML = tiles[random_no7].letter;
      document.getElementById("number_remaining").innerHTML =
        tiles[random_no7].value;
      document.getElementById("count1").innerHTML = tiles[random_no7].count;
    },
  });
}); 



                        
