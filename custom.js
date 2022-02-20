document.querySelector('button').addEventListener('click', function(){

let nmme = document.getElementById("name").value;
let bn = document.getElementById("bn").value;
let en = document.getElementById("en").value;
let math = document.getElementById("math").value;
let s = document.getElementById("s").value;
let ss = document.getElementById("ss").value;
let rel = document.getElementById("rel").value;

function folprokash(marks){
let gpa = "";
let grade = "";

if(marks >= 0 && marks <33){
    gpa = 0;
    grade = "F";
    }else if(marks >= 33 && marks < 40){
        gpa = 1;
        grade = D;
    }else if(marks >= 40 && marks < 50){
        gpa = 2;
        grade = 'C';
    }else if(marks >= 50 && marks < 60){
        gpa = 3;
        grade = 'B';
    }else if(marks >= 60 && marks < 70){
        gpa = 3.5;
        grade = 'A-';
    }else if(marks >= 70 && marks < 80){
        gpa = 4;
        grade = 'A';
    }else if(marks >= 80 && marks <= 100){
        gpa = 5;
        grade = 'A+';
    }
    return{
        gpa : gpa,
        grade : grade
    }
}
document.getElementById("result").innerHTML = `


<table class="table" width="700px" border="1px">
<thead>
  <tr>
    <th scope="col">Subject</th>
    <th scope="col">Marks</th>
    <th scope="col">GPA</th>
    <th scope="col">Grade</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Bangla</td>
    <td>${bn}</td>
    <td>${folprokash(bn).gpa}</td>
    <td>${folprokash(bn).grade}</td>
  </tr>
  <tr>
    <td>English</td>
    <td>${en}</td>
    <td>${folprokash(en).gpa}</td>
    <td>${folprokash(en).grade}</td>
  </tr>
  <tr>
    <td>Math</td>
    <td>${math}</td>
    <td>${folprokash(math).gpa}</td>
    <td>${folprokash(math).grade}</td>
  </tr>
  <tr>
    <td>Science</td>
    <td>${s}</td>
    <td>${folprokash(s).gpa}</td>
    <td>${folprokash(s).grade}</td>
  </tr>
    <tr>
        <td>Social Science</td>
        <td>${ss}</td>
        <td>${folprokash(ss).gpa}</td>
        <td>${folprokash(ss).grade}</td>
    </tr>
    <tr>
        <td>Religion</td>
        <td>${rel}</td>
        <td>${folprokash(rel).gpa}</td>
        <td>${folprokash(rel).grade}</td>
    </tr>    
</tbody>
</table>

`
});