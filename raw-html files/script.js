//--------------------------------------------------DEFINING THE TASK LIST  ----------------------------------------//
const list = ["Fazr","Zuhr","Asr","Magrib","I'sha","Tahajjud","Tilawat","Screen-Time 1 hour","Book Read"];


//--------------------------------INITIATE ELEMENT CREATION (UN-ORDERED LIST INSIDE SURVEY-BODY) --------------------------//
const survey = document.getElementById("survey-body");
const ul = document.createElement("ul");
survey.appendChild(ul);

//---------------------GETTING RANDOM DESCRIPTION----------------------------//


desc1 = "Fill this up honestly, ALLAH IS WATCHING YOU "
desc2 = "...so that I (God) may test them - whose deeds are best. [Surah Kahf-07]"
desc3 = "Compete (with one other) in good works. [Surah Baqarah-148]"
desc4 = "And says man: What! when I am dead shall I truly be brought forth alive? Does not man remember that We created him before, when he was nothing? [19:66-67]"
desc5 = "But when there comes the Deafening Blast - that Day a man will flee from his brother, and his mother and his father, and his wife and his children.   For each one of them that Day will have enough preoccupations of his own.  Some faces, that Day, will be bright – laughing, rejoicing at good news.  And other faces, that Day, will have upon them dust.  Blackness will cover them.  Those are the disbelievers, the wicked ones. [80: 33-42]"
desk6 = 
desk7 = 

desc = [desc1,desc2,desc3,desc4,desc5]
index = Math.floor(Math.random() * 5)
get_desc = desc[index]

document.getElementById("desc").innerText = get_desc











//--------------------------LIST CREATION FUNCTION (THIS APPENDS <li> CONSISTING TASKS--------------------------------//
function addLi(text,id){
  ul.appendChild(
    Object.assign(document.createElement("li"),
    {innerText : list[text],
    id : id,}
    )
  ).appendChild(
    Object.assign(document.createElement("span"),
    {innerText:"1 xp",
    id: "spn-btn"})
  );
}


//--------------------------------------------------LOOP TO CREATE ALL THE <li>----------------------------------------//
for (let i = 0; i < list.length; i++){
      
    addLi(i,i);

//-----------------------------------------TOGGLE CHECKED CLASS ON CLICK-------------------------------//
    document.getElementById(i).onclick = function tik() {
    var li = document.getElementById(i);
    li.classList.toggle("checked");
    };
}



//-----------------------------------------ADDING DATE-TIME-------------------------------//
let date = new Date();
let currentDate = date.getDate() + "-"+(date.getMonth()+1)+"-" + date.getFullYear()
document.getElementById("todolabel").innerText = currentDate