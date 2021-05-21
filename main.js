studentARRAY=[];
function submit() {
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    var name3=document.getElementById("student5").value;
    var name4=document.getElementById("student6").value;

    studentARRAY.push(name1);
    studentARRAY.push(name2);
    studentARRAY.push(name3);
    studentARRAY.push(name4);
    studentARRAY.push(name5);
    studentARRAY.push(name6);

    console.log (studentARRAY);
    document.getElementById("divTAG").innerHTML=studentARRAY;


document.getElementById("button1").style.display = "none";
 document.getElementById("button2").style.display = "inline-block";


}
function sorting() {
    studentARRAY.sort();
    console.log (studentARRAY);
    document.getElementById("divTAG").innerHTML=studentARRAY;
}
