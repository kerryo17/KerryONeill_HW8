/*
Name: Kerry O'Neill
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


/*
                            $(document).ready(function(){
                            $(".reset-btn").click(function(){
                            $("#myForm").trigger("reset");
                          });
                        });
                        */
