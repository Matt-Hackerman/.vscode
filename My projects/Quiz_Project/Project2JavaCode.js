//Creates a counter for which question we are on
//Lines 3-39 are strictly for figuring out what page  we are on
let PageIdOne=document.getElementById("Page1");
let PageIdTwo=document.getElementById("Page2");
let PageIdThree=document.getElementById("Page3");
let PageIdFour=document.getElementById("Page4");
let PageIdFive=document.getElementById("Page5");
let PageIdSix=document.getElementById("Page6");
let i;
let correctAnswer;
let idForForm;
//Result Page
if(PageIdSix!=null){
}
//Page 1
else if(PageIdTwo==null&&PageIdThree==null&&PageIdFour==null&&PageIdFive==null){
    i=0;
    idForForm="form1"
}
//Page 2
else if(PageIdOne==null&&PageIdThree==null&&PageIdFour==null&&PageIdFive==null){
    i=1;
    idForForm="form2"
}
//Page 3
else if(PageIdTwo==null&&PageIdOne==null&&PageIdFour==null&&PageIdFive==null){
    i=2;
    idForForm="form3"
}
//Page 4
else if(PageIdTwo==null&&PageIdThree==null&&PageIdOne==null&&PageIdFive==null){
    i=3;
    idForForm="form4"
}
//Page 5
else if(PageIdTwo==null&&PageIdThree==null&&PageIdFour==null&&PageIdOne==null){
    i=4;
    idForForm="form5"
}

//creating a constructor
function quiz(question, answer, choice1, choice2, choice3, choice4) {
    this.question = question;
    this.answer = answer;
    this.choice1=choice1;
    this.choice2=choice2;
    this.choice3=choice3;
    this.choice4=choice4;
}

//Creates a class to create choices
class choices{
    constructor(choice){
        this.choice=choice;
    }
    createButton(){
    let q1=document.createElement("input");
    q1.setAttribute("type", "radio");
    q1.setAttribute("id", this.choice);
    q1.setAttribute("name",questionsArr[i].answer,);
    q1.setAttribute("required", "")
    let tempForm=document.getElementById(idForForm);
    tempForm.appendChild(q1);
    let actualButton=document.createElement("label");
    actualButton.setAttribute("for", q1.id);
    let temporary=document.createTextNode(this.choice);
    actualButton.appendChild(temporary);
    tempForm.appendChild(actualButton);
    let lineBreak=document.createElement("br");
    tempForm.appendChild(lineBreak);
    }
}

//Creating quiz array
var questionsArr=new Array();

//Adding questions to the array, Question, Answer, Choice 1, Choice 2, Choice 3, Choice
questionsArr[0]= new quiz("What is 10+10", "20", "10", "20", "30", "40")
questionsArr[1]= new quiz("What is 50-10", "40", "39", "40", "41", "42")
questionsArr[2]= new quiz("What is 500*2", "1000", "1000", "10000", "100", "250")
questionsArr[3]= new quiz("What is 37+8", "45", "69", "40", "45", "44")
questionsArr[4]= new quiz("What is 7+7", "14", "34", "14", "15", "12")


//Prints question
let tempForm=document.getElementById(idForForm);
let question1=document.createElement("p");
let quest=document.createTextNode(questionsArr[i].question);
question1.appendChild(quest)
tempForm.appendChild(question1);

//Prints choice 1
let quest1=new choices(questionsArr[i].choice1);   
quest1.createButton(); 
   
//Prints choice 2
let quest2=new choices(questionsArr[i].choice2);   
quest2.createButton(); 

//Prints choice 3
let quest3=new choices(questionsArr[i].choice3);   
quest3.createButton(); 

//Prints choice 4
let quest4=new choices(questionsArr[i].choice4);   
quest4.createButton(); 

//Lets me see score in console
console.log(localStorage.getItem("Score"));


//Create a local storage variable to save score
var correct= Number(localStorage.getItem("Score"))

//function to submit
function deer(){
    console.log("Outside");
    if((document.getElementById(questionsArr[i].answer).checked==false)){
    }
    else{
        correct+=1;
    }
    localStorage.setItem("Score", correct);

}

//Function to print out final score
function finalScore(){
    let finalPara=document.createElement("p");
    let finalText=document.createTextNode(localStorage.getItem("Score")+"/5");
    finalPara.appendChild(finalText);
    document.body.appendChild(finalPara);
}

//Function to clear the local storage
function reset(){
    localStorage.clear();
}
//I see score
console.log(localStorage.getItem("Score"));
