
function Count(){
    for (var i = 1; i < 101; i++)
    {
        if (i % 15 == 0)
        document.write("\n FizzBuzz \n" + "<br>");
        else if (i % 3 == 0)
        document.write("\n Fizz \n" + "<br>");
        else if (i % 5 == 0)
        document.write("\n Buzz \n" + "<br>");
        else
        document.write(i + "<br>");
    }
}

function Sing(){
    var word = "bottles";
    var count = 99;
    while (count > 0) {
        document.write(count + " " + word + "\n of beer on the wall \n");
        document.write(count + " " + word + "\n of beer, \n");
        document.write("\n take one down, pass it a round, \n" + "<br>" );

        count = count - 1;
        if (count > 0) {
            document.write(count + " " + word + "\n of beer on the wall. \n");
        } else {
            document.write("No more" + " " + word + "\n of beer on the wall. \n");
        }
    }
}
