function Addexptextarea(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("efield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here..");

    let exp = document.getElementById("exp");
    let btn = document.getElementById("btn");
    exp.insertBefore(newNode, btn);
}

function Addskilltextarea(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("sfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here..");

    let skill = document.getElementById("skills");
    let btns = document.getElementById("btns");
    skill.insertBefore(newNode, btns);
}

function Addedutextarea(){
    let newNode = document.createElement("textarea");

    newNode.classList.add("form-control");
    newNode.classList.add("edufield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here..");

    let edu = document.getElementById("education");
    let btne = document.getElementById("btne");
    edu.insertBefore(newNode, btne);
}

function generateResume(){
    let name = document.getElementById("name").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = name;

    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = name;

    let numberT = document.getElementById("numberT");
    let num = document.getElementById("num").value;
    numberT.innerHTML = num;
    
    let addressT = document.getElementById("addressT");
    let address = document.getElementById("address").value;
    addressT.innerHTML = address;
    
    let emailT = document.getElementById("emailT");
    let email = document.getElementById("email").value;
    emailT.innerHTML = email;

    let educations = document.getElementsByClassName("edufield");
    let str = "" ;
    for(let e of educations){
        str = str +`<li> ${e.value}</li>`;
    }
    document.getElementById("educationT").innerHTML = str;


    let skills = document.getElementsByClassName("sfield");
    let str1 = "" ;
    for(let e of skills){
        str1 = str1 +`<li> ${e.value}</li>`;
    }
    document.getElementById("skillT").innerHTML = str1;


    let experiences = document.getElementsByClassName("efield");
    let str2 = "" ;
    for(let e of experiences){
        str2 = str2 +`<li> ${e.value}</li>`;
    }
    document.getElementById("experienceT").innerHTML = str2;


    document.querySelector("#resume-form").style.display="none";
    document.querySelector(".resume-template").style.display= "block";
   
}

document.querySelector(".downloadbtn").addEventListener("click",()=>{
        const resume = document.getElementById("resume-template").innerHTML;
        html2pdf(resume).save();
    })

    
   