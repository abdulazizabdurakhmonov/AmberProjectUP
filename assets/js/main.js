$(function () {
    $(document).foundation();


        //window.alert('Hello world!');
        $('.container').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });

    var dice = {
        roll: function (){
            var slides = 6;
            var randomNumber = Math.floor(Math.random() * slides) + 1;
            console.log(randomNumber);
        }
    };



    $('#logo').on('click', function () {
        $('#nav-hide').slideToggle(400);
    });
//--------------------------------------------------------------------------------------------------------------


    //
    //var name = prompt("what is your first name?");
    //var lastName = prompt("what is your last name?");
    //var age = prompt("What is your age?");
    //if(age<16){
    //    alert("yowsiz ancha");
    //}else if(age==16){
    //    alert("rasa endi");
    //}else{
    //    alert("Katta bolekansiz");
    //}
    //
    //
    //alert(name + " " + lastName + " your age is " + age + " Qale endi?");

    //


//--------------------------------------------------------------------------------------------------------------


    //
    //var numOne = document.getElementById("num-one");
    //var numTwo = document.getElementById("num-two");
    //var addSum = document.getElementById("add-sum");
    //
    //numOne.addEventListener("input", add);
    //numTwo.addEventListener("input", add);
    //
    //function add(){
    //    var one = parseFloat(numOne.value) || 0;
    //    var two = parseFloat(numTwo.value) || 0;
    //    addSum.innerHTML = "your sum is " + (one+two);
    //}


//--------------------------------------------------------------------------------------------------------------
//
//
//    var correctGuess = false;
//    var randomNumber = Math.floor(Math.random() * 6) + 2;
//    var guess = prompt('Guess any number between 1 and 6 ?');
//
//    if (parseInt(guess) === randomNumber) {
//        correctGuess = true;
//    } else if (parseInt(guess) < randomNumber) {
//        var guessMore = prompt('Try again. The number I am thinking of is more then ' + guess);
//        if (parseInt(guessMore) === randomNumber) {
//            correctGuess = true;
//        }
//    } else if (parseInt(guess) > randomNumber) {
//        var guessLess = prompt('Try again. The number I am thinking of is less then ' + guess);
//        if (parseInt(guessLess) === randomNumber) {
//            correctGuess = true;
//        }
//    }
//    if ( correctGuess ) {
//        document.write("<p>you guessed the number!!!</p>");
//    } else {
//        document.write("<p>Sorry, the number was " + randomNumber + "!!!</p>");
//    }
//
//
//--------------------------------------------------------------------------------------------------------------

    ////quiz begins, no answers correct
    //var correct = 0;
    //
    ////ask questions
    //
    //var answer1 = prompt('Name a programming language that is also a gem?');
    //if (answer1.toUpperCase() === "RUBY") {
    //    correct += 1;
    //}
    //var answer2 = prompt('Name a programming language that is also a?');
    //if (answer2.toUpperCase() === "PYTHON") {
    //    correct += 1;
    //}
    //var answer3 = prompt('Name a programming language that is style a web?');
    //if (answer3.toUpperCase() === "CSS") {
    //    correct += 1;
    //}
    //var answer4 = prompt('Name a programming language that is also stucture?');
    //if (answer4.toUpperCase() === "HTML") {
    //    correct += 1;
    //}
    //var answer5 = prompt('Name a programming language that is also interact?');
    //if (answer5.toUpperCase() === "JAVASCRIPT") {
    //    correct += 1;
    //}
    //
    //document.write("<p> you got "+ correct +" out 5 questions correct</p>");
    //
    //if(correct === 5 ){
    //    document.write("<p> you got golden medal</p>");
    //} else if ( correct >= 3 ){
    //    document.write("<p> you got silver medal</p>");}
    //else if ( correct >= 1 ){
    //    document.write("<p> you got bronze medal</p>");
    //} else {
    //    document.write("<p> no medal for you, you need to study!!!</p>");
    //}

//--------------------------------------------------------------------------------------------------------------

    //function getRandomNumber ( lower,upper ){
    //
    //    if( isNaN(lower) || isNaN(upper) ){
    //        throw new Error('Both argument must be numbers');
    //    }
    //    return Math.floor(Math.random() * (upper - lower + 1) ) + lower ;
    //}
    //
    //console.log(getRandomNumber(1,6));
    //console.log(getRandomNumber(111,600));
    //console.log(getRandomNumber('nine',63));
    //console.log(getRandomNumber(12,6004));
    //
    ////console.log( getRandomNumber(100));
    ////
    ////function areaSize (width,length){
    ////    var area = width * length ;
    ////    return area;
    ////}
    ////
    ////console.log( areaSize(10,20));
//-------------------------------------------------------------------------------------------------------
//    //var content = "My new content";
//    //
//    //$('.panel-button').on('click', function(){
//    //   var panelId = $(this).attr('data-panelId');
//    //    $('#'+panelId).toggle();
//    //    //$('#'+panelId+' .panel-body' ).html(content);
//    //});
////-------------------------------------------------------------------------------------------------------
//
//    //while loop
//
//    //function randomNubber(upper){
//    //    return Math.floor(Math.random() * upper ) + 1;
//    //}
//    //var counter = 0 ;
//    //
//    //while (counter < 10){
//    //    var randNum = randomNubber(6);
//    //    document.write(randNum + ' ');
//    //    counter += 1 ;
//    //}
//
//
//    //
//    //var upper = 10;
//    //var randomNumber = getRandomNumber(upper);
//    //var guess;
//    //var attempts = 0;
//    //
//    //function getRandomNumber(upper){
//    //    return Math.floor(Math.random() * upper ) + 1;
//    //}
//    //
//    //while(guess !== randomNumber){
//    //    guess = getRandomNumber(upper);
//    //    attempts += 1;
//    //}
//    //
//    //document.write("<p> guess was "+randomNumber+" </p>");
//    //document.write("<p>it took " +attempts+ " to find the guess</p>");
//
//
//
//
//    //----------------------------------------------------------------------------------------
//
//    //do while loop
//
//    //var randomNumber = getRandomNumber(10);
//    //var guess;
//    //var guessCount = 0;
//    //var correctGuess = false;
//    //
//    //function getRandomNumber(upper){
//    //   return Math.floor(Math.random() * upper ) + 1;
//    //
//    //}
//    //
//    //do{
//    //    guess = prompt("I am thinking a number between 1 and 10. What is it?");
//    //    guessCount += 1;
//    //    if( parseInt(guess) === randomNumber){
//    //        correctGuess = true;
//    //    }
//    //}while(!correctGuess);
//    //
//    //document.write("<p> it took you "+guessCount+" times to find "+randomNumber+"</p>");
//
//
//    //-------------------------------------------------------------------------------------------------------
//
//    var html = "";
//
//    function getRgbaColor(){
//        return Math.floor(Math.random() * 256 );
//    }
//
//    function randomColor(){
//        var color = 'rgba(';
//        color += getRgbaColor() + ",";
//        color += getRgbaColor() + ",";
//        color += getRgbaColor() + ")";
//        return color();
//    }
//
//    for ( var i=1; i <= 10; i += 1){
//        var rgbaColor = randomColor();
//        html += '<div style="background-color:' + rgbaColor + '"></div>';
//    }
//
//    document.write(html);
//-----------------------------------------------------------------------------------------------------------------------------
//    var playList = [
//        'nasser al qatami',
//        'sheikh sudais',
//        'rashid mishary',
//        'abdulloh domla',
//        'Abdul-Aziz',
//        'nouman ali khan',
//        'omar suleiman'
//    ];
//
//    function print(message) {
//        document.write(message);
//    }
//
//
//    function printList(list) {
//
//        var listHtml = "<ol>";
//        for (var i = 1; i < list.length; i += 1) {
//            listHtml += "<li>" + list[i] + "</li>";
//        }
//        listHtml += "</ol>";
//        print(listHtml);
//    }
//
//    printList(playList);


//--------------------------------------------------------------------------------------------------------------

    //
    //
    //var inStock = ['apples','bananas','milk','orange','cheese','pizza','cucumber'];
    //var search;
    //
    //inStock.push('juice');
    //
    //function print(message){
    //    document.write("<p>"+ message +"</p>");
    //}
    //
    //
    //while (true){
    //    search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
    //    search = search.toLowerCase();
    //    if(search === "quit"){
    //        break;
    //    }else if (search === "list"){
    //        print( inStock.join(', ') );
    //    }else {
    //        if( inStock.indexOf( search ) > -1 ){
    //            print("YES, We have " + search + " in our stock");
    //        }else {
    //            print(search + ' sorry we dont have it in our stock');
    //        }
    //    }
    //}


//----------------------------------------------------------------------------------------------------------------------

    //
    //var questions = [
    //    ['how many emirates in UAE ?', 7],
    //    ["how old Timurmalik ?", 21],
    //    ["when are we moving from the appartment ?", 1 ]
    //];
    //
    //var correctAnswer = 0;
    //var question;
    //var answer;
    //var response;
    //var html;
    //var wrong = [];
    //var correct= [];
    //
    //function print(message){
    //    //var outputDiv = document.getElementById();
    //    //outputDiv.innerHTML = message;
    //    document.write(message);
    //}
    //
    //function buildList (arr) {
    //    var listHtml = '<ol>';
    //    for (var i = 0; i < arr.length; i += 1) {
    //        listHtml += "<li>" + arr[i] + "</li>";
    //    }
    //    html += "</ol>";
    //    return listHtml;
    //}
    //
    //for (var i = 0; i < questions.length; i += 1){
    //    question = questions[i][0];
    //    answer = questions[i][1];
    //    response = prompt(question);
    //    response = parseInt(response);
    //    if (response === answer){
    //        correctAnswer += 1;
    //        correct.push(question);
    //    }else{
    //        wrong.push(question);
    //    }
    //}
    //
    //html = "You got " + correctAnswer + " question(s) right";
    //html += "<h2>You got " + correctAnswer + " question(s) right</h2>";
    //html += buildList(correct);
    //html += "<h2>You got these question(s) wrong</h2>";
    //html += buildList(wrong);
    //print(html);
//----------------------------------------------------------------------------
//    var questions = [
//        ['What is it?',1],
//        ['How is it?',1],
//        ['When was it?',1]
//    ];
//
//    var correctAnswer = 0;
//    var question;
//    var answer;
//    var response;
//    var html;
//    var correct = [];
//    var wrong = [];
//
//
//    function print(message){
//        document.write(message);
//    }
//
//
//    function buildList(arr){
//        var listHtml = "<ol>";
//        for (var i = 0; i < arr.length ; i += 1){
//            listHtml += "<li>"+ arr[i] +"</li>";
//        }
//        listHtml += "</ol>";
//        return listHtml;
//    }
//
//
//    for (var i = 0; i < questions.length; i += 1){
//        var question = questions[i][0];
//        var answer = questions[i][1];
//        var response = prompt(question);
//        var response = parseInt(response);
//        if(response === answer){
//            correctAnswer += 1;
//            correct.push(question);
//        }else{
//            wrong.push(question);
//        }
//    }
//
//
//    html = "<h1>You got "+ correctAnswer +" answers </h1>";
//    html += "<h2>You got " + correctAnswer + " question(s) right</h2>";
//    html += buildList(correct);
//    html += "<h2>You got these question(s) wrong</h2>";
//    html += buildList(wrong);
//
//    print(html);
//

    //
    //var students = [
    //
    //    {
    //        name: "Abdul-Aziz",
    //        track: "Front-End-Developer",
    //        achievements: "77",
    //        points: "97"
    //    },
    //    {
    //        name: "Oybek aka",
    //        track: "Web-Developer",
    //        achievements: "89",
    //        points: "97"
    //    },
    //    {
    //        name: "Abdurauf",
    //        track: "Designer",
    //        achievements: "77",
    //        points: "97"
    //    },
    //    {
    //        name: "Bobur",
    //        track: "Gamer",
    //        achievements: "97",
    //        points: "97"
    //    }
    //
    //];
    //
    //var message = "";
    //var student;
    //
    //
    //function print(message) {
    //    document.write(message);
    //}
    //
    //function getStudentReport(student) {
    //    var report  = "<h2>Student: " + student.name + "</h2>";
    //        report += "<h2>Track: " + student.track + "</h2>";
    //        report += "<h2>Achievements: " + student.achievements + "</h2>";
    //        report += "<h2>Points: " + student.points + "</h2>";
    //    return report;
    //}
    //
    //
    //while (true) {
    //    var search = prompt("Search student record type a name [Jody][or type to 'quit' to end]");
    //    if (search === null || search.toLowerCase() === "quit") {
    //        break;
    //    }
    //    for (var i = 0; i < students.length; i += 1) {
    //        student = students[i];
    //        if (student.name.toLowerCase() === search) {
    //            message = getStudentReport(student);
    //            print(message);
    //        }
    //    }
    //}
    //-------------------------------------------------------------------------------
//    var $overlay = $("<div id='overlay'></div>");
//
//    $("body").append($overlay);
//
//
//
//
//    $(".blog-images a").click(function(event){
//        event.preventDefault();
//        var imageLocation = $(this).attr("href");
//        $image.attr("src", imageLocation);
//        $overlay.show();
//    })
//    //-------------------------------------------------------------------------------

    //$("form span").hide();
    //
    //var $password = $("#password");
    //var $confirmPassword = $("#confirm_password");
    //
    //
    //
    //
    //function passwordEvent(){
    // if($password.val().length > 8){
    //     $password.next().hide();
    // }else{
    //    $password.next().show();
    // }
    //}
    //
    //function confirmPasswordEvent(){
    //    if($password.val() === $confirmPassword.val()){
    //        $confirmPassword.next().hide();
    //    }else {
    //        $confirmPassword.next().show();
    //    }
    //}
    //
    //$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
    //$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


////////////AJAX//////////////////////////////////////////////


    //var xhr = new XMLHttpRequest();/////-create http-request

    ///create a call back

    //xhr.onreadystatechange = function(){
    //    if(xhr.readyState === 4 ){
    //        var employees = JSON.parse(xhr.responseText);
    //        var statusHTML = "<ul class='bulleted'>";
    //        for (var i=0; i<employees.length; i += 1){
    //            if(employees[i].inoffice === true){
    //                statusHTML += "<li class ="in">";
    //            }
    //            else{
    //                statusHTML += '<li class ="out">';
    //            }
    //            statusHTML += employees[i].name;
    //            statusHTML += "</li>";
    //        }
    //    }
    //
    //};
    //
    //xhr.open('GET', '../templates/side.json');
    //
    //xhr.send();


//////////////////////////////////AJAX-with-Jquery/////////////////////////////////////////


    //
    //$(function(){
    //
    //    var url = "../templates/side.json";
    //    $.getJSON(url, function(response){
    //        var statusHTML = "<ul class='bulleted'>";
    //        $.each(response, function(index, employee){
    //           if(employee.inoffice === true){
    //             statusHTML += '<li class="in">';
    //           } else {
    //               statusHTML += '<li class="out">';
    //           }
    //            statusHTML += employee.name + "</li>";
    //        });
    //        statusHTML += "</ul>";
    //        $('#employeeList').html(statusHTML);
    //    });
    //
    //});

    //$('#special').click(function () {
    //    //$("button").removeClass("selected");
    //    //$(this).addClass("selected");
    //    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //    var animal = $(this).text();
    //    var flickrOptions = {
    //        tags: animal,
    //        form: "json"
    //    };
    //
    //    function displayPhotos(data) {
    //        var photoHTML = "<ul class='new-style'>";
    //        $.each(data.items, function (i, photo) {
    //            photoHTML += "<li>";
    //            photoHTML += "<a href='" + photo.link + "'>";
    //            photoHTML += "<img src='" + photo.media.m + "'></a></li>";
    //        });
    //        photoHTML += "</ul>";
    //        $('#photos').html(photoHTML);
    //    }
    //
    //    //URL       //data     //callback-function
    //    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    //});
    //




    //$('form').submit(function (evt) {
    //    evt.preventDefault();
    //    var $searchField = $("#searh");
    //
    //
    //
    //    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    //    var animal = $searchField.val();
    //    var flickrOptions = {
    //        tags: animal,
    //        form: "json"
    //    };
    //
    //    function displayPhotos(data) {
    //        var photoHTML = "<ul class='form-photos'>";
    //        $.each(data.items, function (i, photo) {
    //            photoHTML += "<li>";
    //            photoHTML += "<a href='" + photo.link + "'>";
    //            photoHTML += "<img src='" + photo.media.m + "'></a></li>";
    //        });
    //        photoHTML += "</ul>";
    //        $('#form-search').html(photoHTML);
    //    }
    //
    //    //URL       //data     //callback-function
    //    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    //});

});
