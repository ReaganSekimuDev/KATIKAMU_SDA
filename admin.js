let tbody = document.getElementById("tbody");
let card = document.querySelector(".card");
let thds = document.querySelectorAll("th");

let Name;  
let physics;  
let chemistry;  
let maths;  
let biology;  
let geography  
let history;  
let ICT  
let entre;
let agriculture  
let CRE  
let IRE  
let PE  
let kiswahili
let IdNo

let Students = JSON.parse(localStorage.getItem("Student_performance"))
function displayPerformance() {
    let students = JSON.parse(localStorage.getItem("Student_performance"));
    let number = 0;
    let tr = "";
    students.forEach((student,i) => {
        tr += "<tr>"+
        `
        <td> ${number += 1} </td>
        <td class="left"> ${student.IdNo} </td>
        <td class="left"> ${student.Name} </td>
        <td> ${((student.Phy/100)*3).toFixed(1)} </td>
        <td> ${((student.Chem/100)*3).toFixed(1)} </td>
        <td> ${((student.Math/100)*3).toFixed(1)} </td>
        <td> ${((student.Bio/100)*3).toFixed(1)} </td>
        <td> ${((student.Geog/100)*3).toFixed(1)} </td>
        <td> ${((student.His/100)*3).toFixed(1)} </td>
        <td> ${((student.Ict/100)*3).toFixed(1)} </td>
        <td> ${((student.Ent/100)*3).toFixed(1)} </td>
        <td> ${((student.Agric/100)*3).toFixed(1)} </td>
        <td> ${((student.Cre/100)*3).toFixed(1)} </td>
        <td> ${((student.Ire/100)*3).toFixed(1)} </td>
        <td> ${((student.Pe/100)*3).toFixed(1)} </td>
        <td> ${((student.Kis/100)*3).toFixed(1)} </td>
        <td id="icon_row">
        <img src="monitoring.png" class="icon" onclick="View(${i})">
        <img src="delete.png" class="icon" onclick="Del(${i})">
        </td>

        `+
        "</tr>"
    })
    tbody.innerHTML = tr;
}
displayPerformance()

function Del(index) {
    Students.splice(index,1);
    localStorage.setItem("Student_performance",JSON.stringify(Students))
    location.reload();
}
function View(index) {
    card.style.display = "block";
    let Name = Students[index].Name;  
    let physics = Students[index].Phy;  
    let chemistry = Students[index].Chem;  
    let maths = Students[index].Math;  
    let biology = Students[index].Bio;  
    let geography = Students[index].Geog;  
    let history = Students[index].His;  
    let ICT = Students[index].Ict;  
    let entre = Students[index].Ent;  
    let agriculture = Students[index].Agric;  
    let CRE = Students[index].Cre;  
    let IRE = Students[index].Ire;  
    let PE = Students[index].Pe;  
    let kiswahili = Students[index].Kis;
    let IdNo = Students[index].IdNo;  

    let phyScore;
    let phyGrade;
    
    if (((physics/100)*3).toFixed(1) === '0.0') {
        phyGrade = "-"
    }
    else if (((physics/100)*3).toFixed(1) <= 0.9) {
        phyGrade = "E"
    }
    else if (((physics/100)*3).toFixed(1) <= 1.4) {
        phyGrade = "D"
    }
    else if (((physics/100)*3).toFixed(1) <= 2.4) {
        phyGrade = "C"
    }
    else if (((physics/100)*3).toFixed(1) <= 2.6) {
        phyGrade = "B"
    }
    else if (((physics/100)*3).toFixed(1) <= 3) {
        phyGrade = "A"
    }
    let ChemGrade;
    if (((chemistry/100)*3).toFixed(1) === '0.0') {
        ChemGrade = "-"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 0.9) {
        ChemGrade = "E"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 1.4) {
        ChemGrade = "D"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 2.4) {
        ChemGrade = "C"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 2.6) {
        ChemGrade = "B"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 3) {
        ChemGrade = "A"
    }
    let bioGrade;
    if (((biology/100)*3).toFixed(1) === '0.0') {
        bioGrade = "-"
    }
    else if (((biology/100)*3).toFixed(1) <= 0.9) {
        bioGrade = "E"
    }
    else if (((biology/100)*3).toFixed(1) <= 1.4) {
        bioGrade = "D"
    }
    else if (((biology/100)*3).toFixed(1) <= 2.4) {
        bioGrade = "C"
    }
    else if (((biology/100)*3).toFixed(1) <= 2.6) {
        bioGrade = "B"
    }
    else if (((biology/100)*3).toFixed(1) <= 3) {
        bioGrade = "A"
    }
    let mathGrade;
    if (((maths/100)*3).toFixed(1) === '0.0') {
        mathGrade = "-"
    }
    else if (((maths/100)*3).toFixed(1) <= 0.9) {
        mathGrade = "E"
    }
    else if (((maths/100)*3).toFixed(1) <= 1.4) {
        mathGrade = "D"
    }
    else if (((maths/100)*3).toFixed(1) <= 2.4) {
        mathGrade = "C"
    }
    else if (((maths/100)*3).toFixed(1) <= 2.6) {
        mathGrade = "B"
    }
    else if (((maths/100)*3).toFixed(1) <= 3) {
        mathGrade = "A"
    }

    let geogGrade;
    
    if (((geography/100)*3).toFixed(1) === '0.0') {
        geogGrade = "-"
    }
    else if (((geography/100)*3).toFixed(1) <= 0.9) {
        geogGrade = "E"
    }
    else if (((geography/100)*3).toFixed(1) <= 1.4) {
        geogGrade = "D"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.4) {
        geogGrade = "C"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.6) {
        geogGrade = "B"
    }
    else if (((geography/100)*3).toFixed(1) <= 3) {
        geogGrade = "A"
    }
    let hisGrade;
    if (((history/100)*3).toFixed(1) === '0.0') {
        hisGrade = "-"
    }
    else if (((history/100)*3).toFixed(1) <= 0.9) {
        hisGrade = "E"
    }
    else if (((history/100)*3).toFixed(1) <= 1.4) {
        hisGrade = "D"
    }
    else if (((history/100)*3).toFixed(1) <= 2.4) {
        hisGrade = "C"
    }
    else if (((history/100)*3).toFixed(1) <= 2.6) {
        hisGrade = "B"
    }
    else if (((history/100)*3).toFixed(1) <= 3) {
        hisGrade = "A"
    }
    let ictGrade;
    if (((ICT/100)*3).toFixed(1) === '0.0') {
        ictGrade = "-"
    }
    else if (((ICT/100)*3).toFixed(1) <= 0.9) {
        ictGrade = "E"
    }
    else if (((ICT/100)*3).toFixed(1) <= 1.4) {
        ictGrade = "D"
    }
    else if (((ICT/100)*3).toFixed(1) <= 2.4) {
        ictGrade = "C"
    }
    else if (((ICT/100)*3).toFixed(1) <= 2.6) {
        ictGrade = "B"
    }
    else if (((ICT/100)*3).toFixed(1) <= 3) {
        ictGrade = "A"
    }
    let entGrade;
    if (((entre/100)*3).toFixed(1) === '0.0') {
        entGrade = "-"
    }
    else if (((entre/100)*3).toFixed(1) <= 0.9) {
        entGrade = "E"
    }
    else if (((entre/100)*3).toFixed(1) <= 1.4) {
        entGrade = "D"
    }
    else if (((entre/100)*3).toFixed(1) <= 2.4) {
        entGrade = "C"
    }
    else if (((entre/100)*3).toFixed(1) <= 2.6) {
        entGrade = "B"
    }
    else if (((entre/100)*3).toFixed(1) <= 3) {
        entGrade = "A"
    }

    let agricGrade;
    if (((agriculture/100)*3).toFixed(1) === '0.0') {
        agricGrade = "-"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 0.9) {
        agricGrade = "E"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 1.4) {
        agricGrade = "D"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 2.4) {
        agricGrade = "C"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 2.6) {
        agricGrade = "B"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 3) {
        agricGrade = "A"
    }

    let creGrade;
    
    if (((geography/100)*3).toFixed(1) === '0.0') {
        creGrade = "-"
    }
    else if (((geography/100)*3).toFixed(1) <= 0.9) {
        creGrade = "E"
    }
    else if (((geography/100)*3).toFixed(1) <= 1.4) {
        creGrade = "D"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.4) {
        creGrade = "C"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.6) {
        creGrade = "B"
    }
    else if (((geography/100)*3).toFixed(1) <= 3) {
        creGrade = "A"
    }
    let ireGrade;
    if (((history/100)*3).toFixed(1) === '0.0') {
        ireGrade = "-"
    }
    else if (((history/100)*3).toFixed(1) <= 0.9) {
        ireGrade = "E"
    }
    else if (((history/100)*3).toFixed(1) <= 1.4) {
        ireGrade = "D"
    }
    else if (((history/100)*3).toFixed(1) <= 2.4) {
        ireGrade = "C"
    }
    else if (((history/100)*3).toFixed(1) <= 2.6) {
        ireGrade = "B"
    }
    else if (((history/100)*3).toFixed(1) <= 3) {
        ireGrade = "A"
    }
    let peGrade;
    if (((PE/100)*3).toFixed(1) === '0.0') {
        peGrade = "-"
    }
    else if (((PE/100)*3).toFixed(1) <= 0.9) {
        peGrade = "E"
    }
    else if (((PE/100)*3).toFixed(1) <= 1.4) {
        peGrade = "D"
    }
    else if (((PE/100)*3).toFixed(1) <= 2.4) {
        peGrade = "C"
    }
    else if (((PE/100)*3).toFixed(1) <= 2.6) {
        peGrade = "B"
    }
    else if (((PE/100)*3).toFixed(1) <= 3) {
        peGrade = "A"
    }
    let kisGrade;
    if (((kiswahili/100)*3).toFixed(1) === '0.0') {
        kisGrade = "-"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 0.9) {
        kisGrade = "E"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 1.4) {
        kisGrade = "D"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 2.4) {
        kisGrade = "C"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 2.6) {
        kisGrade = "B"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 3) {
        kisGrade = "A"
    }

    // Indicators & Comments...............
    let gradeArray = [phyGrade,ChemGrade,mathGrade,bioGrade,geogGrade,hisGrade,ictGrade,entGrade,agricGrade,creGrade,ireGrade,peGrade,kisGrade];
    let commentArray = [phyGrade,ChemGrade,mathGrade,bioGrade,geogGrade,hisGrade,ictGrade,entGrade,agricGrade,creGrade,ireGrade,peGrade,kisGrade];

    commentArray.forEach((cc,ci) => {
        switch(cc) {
            case "A":
                commentArray[ci] = "Verry Good"
                break;
            case "B":
                commentArray[ci] = "Good"
                break;
            case "C":
                commentArray[ci] = "Some how"
                break;
            case "D":
                commentArray[ci] = "Poor"
                break;
            case "E":
                commentArray[ci] = "Fail"
                break;
            default:
                commentArray[ci] = "Missed"
                break;
        }
    })
    gradeArray.forEach((gg,gi) => {
        switch(gg) {
            case "A":
                gradeArray[gi] = "Excellent"
                break;
            case "B":
                gradeArray[gi] = "Accomplished"
                break;
            case "C":
                gradeArray[gi] = "Moderate"
                break;
            case "D":
                gradeArray[gi] = "Basic"
                break;
            case "E":
                gradeArray[gi] = "Excceptional"
                break;
        }
    })

    
    let report = `
    <div class="reportCard">
            <section id="sec1">
                <h1>KATIKAMU SDA KAKOOGE</h1>
                <h2>End of Term <spna id="term">II</spna></h2>
            </section>
            <section id="sec2">
                <div id="info">
                    <p>Student's Name: <b id="sName">${Name}</b></p>
                </div>
                <div id="inf2">
                    <p>Id_No.: <b id="sId">${IdNo}</b></p>
                    <img src="badge.jpeg" alt="Candidate Name" id="sPhoto">
                </div>
            </section>
            <section id="sec3">
                <h2>Assesment</h2>
                <table border>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Scores</th>
                            <th>Grade</th>
                            <th>Indicator</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Phsics</td>
                            <td>${((physics/100)*3).toFixed(1)}</td>
                            <td>${phyGrade}</td>
                            <td>${gradeArray[0]}</td>
                            <td>${commentArray[0]}</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>${((chemistry/100)*3).toFixed(1)}</td>
                            <td>${ChemGrade}</td>
                            <td>${gradeArray[1]}</td>
                            <td>${commentArray[1]}</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>${((maths/100)*3).toFixed(1)}</td>
                            <td>${mathGrade}</td>
                            <td>${gradeArray[2]}</td>
                            <td>${commentArray[2]}</td>
                        </tr>
                        <tr>
                            <td>Biology</td>
                            <td>${((biology/100)*3).toFixed(1)}</td>
                            <td>${bioGrade}</td>
                            <td>${gradeArray[3]}</td>
                            <td>${commentArray[3]}</td>
                        </tr>
                        <tr>
                            <td>Geography</td>
                            <td>${((geography/100)*3).toFixed(1)}</td>
                            <td>${geogGrade}</td>
                            <td>${gradeArray[4]}</td>
                            <td>${commentArray[4]}</td>
                        </tr>
                        <tr>
                            <td>Hitsory</td>
                            <td>${((history/100)*3).toFixed(1)}</td>
                            <td>${hisGrade}</td>
                            <td>${gradeArray[5]}</td>
                            <td>${commentArray[5]}</td>
                        </tr>
                        <tr>
                            <td>ICT</td>
                            <td>${((ICT/100)*3).toFixed(1)}</td>
                            <td>${ictGrade}</td>
                            <td>${gradeArray[6]}</td>
                            <td>${commentArray[6]}</td>
                        </tr>
                        <tr>
                            <td>Ent</td>
                            <td>${((entre/100)*3).toFixed(1)}</td>
                            <td>${entGrade}</td>
                            <td>${gradeArray[7]}</td>
                            <td>${commentArray[7]}</td>
                        </tr>
                        <tr>
                            <td>Agriculture</td>
                            <td>${((agriculture/100)*3).toFixed(1)}</td>
                            <td>${agricGrade}</td>
                            <td>${gradeArray[8]}</td>
                            <td>${commentArray[8]}</td>
                        </tr>
                        <tr>
                            <td>C.R.E</td>
                            <td>${((CRE/100)*3).toFixed(1)}</td>
                            <td>${creGrade}</td>
                            <td>${gradeArray[9]}</td>
                            <td>${commentArray[9]}</td>
                        </tr>
                        <tr>
                            <td>I.R.E</td>
                            <td>${((IRE/100)*3).toFixed(1)}</td>
                            <td>${ireGrade}</td>
                            <td>${gradeArray[10]}</td>
                            <td>${commentArray[10]}</td>
                        </tr>
                        <tr>
                            <td>P.E</td>
                            <td>${((PE/100)*3).toFixed(1)}</td>
                            <td>${peGrade}</td>
                            <td>${gradeArray[11]}</td>
                            <td>${commentArray[11]}</td>
                        </tr>
                        <tr>
                            <td>Kiswahili</td>
                            <td>${((kiswahili/100)*3).toFixed(1)}</td>
                            <td>${kisGrade}</td>
                            <td>${gradeArray[12]}</td>
                            <td>${commentArray[12]}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="sec4">
                <p>Thanks for Parsing</p>
                <h3>Head Teacher <br>
                <i>Signature</i>
                </h3>
            </section>
        </div>
    `
    card.innerHTML += report;

    thds.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
    })
}
function closeReport() {
    card.style.display ="none";
    location.reload();
}

function printCard() {
    window.print();
}
function printAll() {

    thds.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
    })

    card.style.display = "block"
    let stReports = "";
    let Studens = JSON.parse(localStorage.getItem("Student_performance"));
    Studens.forEach((st,ii) => {
        let Name = st.Name;  
        let physics = st.Phy;  
        let chemistry = st.Chem;  
        let maths = st.Math;  
        let biology = st.Bio;  
        let geography = st.Geog;  
        let history = st.His;  
        let ICT = st.Ict;  
        let entre = st.Ent;  
        let agriculture = st.Agric;  
        let CRE = st.Cre;  
        let IRE = st.Ire;  
        let PE = st.Pe;  
        let kiswahili = st.Kis;
        let IdNo = st.IdNo;
        
        let phyGrade;
    
    if (((physics/100)*3).toFixed(1) === '0.0') {
        phyGrade = "-"
    }
    else if (((physics/100)*3).toFixed(1) <= 0.9) {
        phyGrade = "E"
    }
    else if (((physics/100)*3).toFixed(1) <= 1.4) {
        phyGrade = "D"
    }
    else if (((physics/100)*3).toFixed(1) <= 2.4) {
        phyGrade = "C"
    }
    else if (((physics/100)*3).toFixed(1) <= 2.6) {
        phyGrade = "B"
    }
    else if (((physics/100)*3).toFixed(1) <= 3) {
        phyGrade = "A"
    }
    let ChemGrade;
    if (((chemistry/100)*3).toFixed(1) === '0.0') {
        ChemGrade = "-"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 0.9) {
        ChemGrade = "E"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 1.4) {
        ChemGrade = "D"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 2.4) {
        ChemGrade = "C"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 2.6) {
        ChemGrade = "B"
    }
    else if (((chemistry/100)*3).toFixed(1) <= 3) {
        ChemGrade = "A"
    }
    let bioGrade;
    if (((biology/100)*3).toFixed(1) === '0.0') {
        bioGrade = "-"
    }
    else if (((biology/100)*3).toFixed(1) <= 0.9) {
        bioGrade = "E"
    }
    else if (((biology/100)*3).toFixed(1) <= 1.4) {
        bioGrade = "D"
    }
    else if (((biology/100)*3).toFixed(1) <= 2.4) {
        bioGrade = "C"
    }
    else if (((biology/100)*3).toFixed(1) <= 2.6) {
        bioGrade = "B"
    }
    else if (((biology/100)*3).toFixed(1) <= 3) {
        bioGrade = "A"
    }
    let mathGrade;
    if (((maths/100)*3).toFixed(1) === '0.0') {
        mathGrade = "-"
    }
    else if (((maths/100)*3).toFixed(1) <= 0.9) {
        mathGrade = "E"
    }
    else if (((maths/100)*3).toFixed(1) <= 1.4) {
        mathGrade = "D"
    }
    else if (((maths/100)*3).toFixed(1) <= 2.4) {
        mathGrade = "C"
    }
    else if (((maths/100)*3).toFixed(1) <= 2.6) {
        mathGrade = "B"
    }
    else if (((maths/100)*3).toFixed(1) <= 3) {
        mathGrade = "A"
    }

    let geogGrade;
    
    if (((geography/100)*3).toFixed(1) === '0.0') {
        geogGrade = "-"
    }
    else if (((geography/100)*3).toFixed(1) <= 0.9) {
        geogGrade = "E"
    }
    else if (((geography/100)*3).toFixed(1) <= 1.4) {
        geogGrade = "D"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.4) {
        geogGrade = "C"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.6) {
        geogGrade = "B"
    }
    else if (((geography/100)*3).toFixed(1) <= 3) {
        geogGrade = "A"
    }
    let hisGrade;
    if (((history/100)*3).toFixed(1) === '0.0') {
        hisGrade = "-"
    }
    else if (((history/100)*3).toFixed(1) <= 0.9) {
        hisGrade = "E"
    }
    else if (((history/100)*3).toFixed(1) <= 1.4) {
        hisGrade = "D"
    }
    else if (((history/100)*3).toFixed(1) <= 2.4) {
        hisGrade = "C"
    }
    else if (((history/100)*3).toFixed(1) <= 2.6) {
        hisGrade = "B"
    }
    else if (((history/100)*3).toFixed(1) <= 3) {
        hisGrade = "A"
    }
    let ictGrade;
    if (((ICT/100)*3).toFixed(1) === '0.0') {
        ictGrade = "-"
    }
    else if (((ICT/100)*3).toFixed(1) <= 0.9) {
        ictGrade = "E"
    }
    else if (((ICT/100)*3).toFixed(1) <= 1.4) {
        ictGrade = "D"
    }
    else if (((ICT/100)*3).toFixed(1) <= 2.4) {
        ictGrade = "C"
    }
    else if (((ICT/100)*3).toFixed(1) <= 2.6) {
        ictGrade = "B"
    }
    else if (((ICT/100)*3).toFixed(1) <= 3) {
        ictGrade = "A"
    }
    let entGrade;
    if (((entre/100)*3).toFixed(1) === '0.0') {
        entGrade = "-"
    }
    else if (((entre/100)*3).toFixed(1) <= 0.9) {
        entGrade = "E"
    }
    else if (((entre/100)*3).toFixed(1) <= 1.4) {
        entGrade = "D"
    }
    else if (((entre/100)*3).toFixed(1) <= 2.4) {
        entGrade = "C"
    }
    else if (((entre/100)*3).toFixed(1) <= 2.6) {
        entGrade = "B"
    }
    else if (((entre/100)*3).toFixed(1) <= 3) {
        entGrade = "A"
    }

    let agricGrade;
    if (((agriculture/100)*3).toFixed(1) === '0.0') {
        agricGrade = "-"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 0.9) {
        agricGrade = "E"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 1.4) {
        agricGrade = "D"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 2.4) {
        agricGrade = "C"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 2.6) {
        agricGrade = "B"
    }
    else if (((agriculture/100)*3).toFixed(1) <= 3) {
        agricGrade = "A"
    }

    let creGrade;
    
    if (((geography/100)*3).toFixed(1) === '0.0') {
        creGrade = "-"
    }
    else if (((geography/100)*3).toFixed(1) <= 0.9) {
        creGrade = "E"
    }
    else if (((geography/100)*3).toFixed(1) <= 1.4) {
        creGrade = "D"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.4) {
        creGrade = "C"
    }
    else if (((geography/100)*3).toFixed(1) <= 2.6) {
        creGrade = "B"
    }
    else if (((geography/100)*3).toFixed(1) <= 3) {
        creGrade = "A"
    }
    let ireGrade;
    if (((history/100)*3).toFixed(1) === '0.0') {
        ireGrade = "-"
    }
    else if (((history/100)*3).toFixed(1) <= 0.9) {
        ireGrade = "E"
    }
    else if (((history/100)*3).toFixed(1) <= 1.4) {
        ireGrade = "D"
    }
    else if (((history/100)*3).toFixed(1) <= 2.4) {
        ireGrade = "C"
    }
    else if (((history/100)*3).toFixed(1) <= 2.6) {
        ireGrade = "B"
    }
    else if (((history/100)*3).toFixed(1) <= 3) {
        ireGrade = "A"
    }
    let peGrade;
    if (((PE/100)*3).toFixed(1) === '0.0') {
        peGrade = "-"
    }
    else if (((PE/100)*3).toFixed(1) <= 0.9) {
        peGrade = "E"
    }
    else if (((PE/100)*3).toFixed(1) <= 1.4) {
        peGrade = "D"
    }
    else if (((PE/100)*3).toFixed(1) <= 2.4) {
        peGrade = "C"
    }
    else if (((PE/100)*3).toFixed(1) <= 2.6) {
        peGrade = "B"
    }
    else if (((PE/100)*3).toFixed(1) <= 3) {
        peGrade = "A"
    }
    let kisGrade;
    if (((kiswahili/100)*3).toFixed(1) === '0.0') {
        kisGrade = "-"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 0.9) {
        kisGrade = "E"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 1.4) {
        kisGrade = "D"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 2.4) {
        kisGrade = "C"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 2.6) {
        kisGrade = "B"
    }
    else if (((kiswahili/100)*3).toFixed(1) <= 3) {
        kisGrade = "A"
    }

    // Indicators & Comments...............
    let gradeArray = [phyGrade,ChemGrade,mathGrade,bioGrade,geogGrade,hisGrade,ictGrade,entGrade,agricGrade,creGrade,ireGrade,peGrade,kisGrade];
    let commentArray = [phyGrade,ChemGrade,mathGrade,bioGrade,geogGrade,hisGrade,ictGrade,entGrade,agricGrade,creGrade,ireGrade,peGrade,kisGrade];

    commentArray.forEach((cc,ci) => {
        switch(cc) {
            case "A":
                commentArray[ci] = "Verry Good"
                break;
            case "B":
                commentArray[ci] = "Good"
                break;
            case "C":
                commentArray[ci] = "Some how"
                break;
            case "D":
                commentArray[ci] = "Poor"
                break;
            case "E":
                commentArray[ci] = "Fail"
                break;
            default:
                commentArray[ci] = "Missed"
                break;
        }
    })
    gradeArray.forEach((gg,gi) => {
        switch(gg) {
            case "A":
                gradeArray[gi] = "Excellent"
                break;
            case "B":
                gradeArray[gi] = "Accomplished"
                break;
            case "C":
                gradeArray[gi] = "Moderate"
                break;
            case "D":
                gradeArray[gi] = "Basic"
                break;
            case "E":
                gradeArray[gi] = "Excceptional"
                break;
        }
    })



        stReports += `
    <div id="allCards" class="reportCard"> 
    
            <section id="sec1">
                <h1>KATIKAMU SDA KAKOOGE</h1>
                <h2>End of Term <spna id="term">II</spna></h2>
                </section>
            <section id="sec2">
                <div id="info">
                    <p>Student's Name: <b id="sName">${Name}</b></p>
                </div>
                <div id="inf2">
                <p>Id_No.: <b id="sId">${IdNo}</b></p>
                <img src="badge.jpeg" alt="Candidate Name" id="sPhoto">
                </div>
            </section>
            <section id="sec3">
            <h2>Assesment</h2>
                <table border>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Scores</th>
                            <th>Grade</th>
                            <th>Indicator</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Phsics</td>
                            <td>${((physics/100)*3).toFixed(1)}</td>
                            <td>${phyGrade}</td>
                            <td>${gradeArray[0]}</td>
                            <td>${commentArray[0]}</td>
                        </tr>
                        <tr>
                            <td>Chemistry</td>
                            <td>${((chemistry/100)*3).toFixed(1)}</td>
                            <td>${ChemGrade}</td>
                            <td>${gradeArray[1]}</td>
                            <td>${commentArray[1]}</td>
                        </tr>
                        <tr>
                            <td>Mathematics</td>
                            <td>${((maths/100)*3).toFixed(1)}</td>
                            <td>${mathGrade}</td>
                            <td>${gradeArray[2]}</td>
                            <td>${commentArray[2]}</td>
                        </tr>
                        <tr>
                            <td>Biology</td>
                            <td>${((biology/100)*3).toFixed(1)}</td>
                            <td>${bioGrade}</td>
                            <td>${gradeArray[3]}</td>
                            <td>${commentArray[3]}</td>
                        </tr>
                        <tr>
                            <td>Geography</td>
                            <td>${((geography/100)*3).toFixed(1)}</td>
                            <td>${geogGrade}</td>
                            <td>${gradeArray[4]}</td>
                            <td>${commentArray[4]}</td>
                        </tr>
                        <tr>
                            <td>Hitsory</td>
                            <td>${((history/100)*3).toFixed(1)}</td>
                            <td>${hisGrade}</td>
                            <td>${gradeArray[5]}</td>
                            <td>${commentArray[5]}</td>
                        </tr>
                        <tr>
                            <td>ICT</td>
                            <td>${((ICT/100)*3).toFixed(1)}</td>
                            <td>${ictGrade}</td>
                            <td>${gradeArray[6]}</td>
                            <td>${commentArray[6]}</td>
                        </tr>
                        <tr>
                            <td>Ent</td>
                            <td>${((entre/100)*3).toFixed(1)}</td>
                            <td>${entGrade}</td>
                            <td>${gradeArray[7]}</td>
                            <td>${commentArray[7]}</td>
                        </tr>
                        <tr>
                            <td>Agriculture</td>
                            <td>${((agriculture/100)*3).toFixed(1)}</td>
                            <td>${agricGrade}</td>
                            <td>${gradeArray[8]}</td>
                            <td>${commentArray[8]}</td>
                        </tr>
                        <tr>
                            <td>C.R.E</td>
                            <td>${((CRE/100)*3).toFixed(1)}</td>
                            <td>${creGrade}</td>
                            <td>${gradeArray[9]}</td>
                            <td>${commentArray[9]}</td>
                        </tr>
                        <tr>
                            <td>I.R.E</td>
                            <td>${((IRE/100)*3).toFixed(1)}</td>
                            <td>${ireGrade}</td>
                            <td>${gradeArray[10]}</td>
                            <td>${commentArray[10]}</td>
                        </tr>
                        <tr>
                            <td>P.E</td>
                            <td>${((PE/100)*3).toFixed(1)}</td>
                            <td>${peGrade}</td>
                            <td>${gradeArray[11]}</td>
                            <td>${commentArray[11]}</td>
                        </tr>
                        <tr>
                            <td>Kiswahili</td>
                            <td>${((kiswahili/100)*3).toFixed(1)}</td>
                            <td>${kisGrade}</td>
                            <td>${gradeArray[12]}</td>
                            <td>${commentArray[12]}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="sec4">
            <p>Thanks for Parsing</p>
            <h3>Head Teacher <br>
            <i>Signature</i>
            </h3>
            </section>
        </div>
    </div>
    `
});
    card.innerHTML += stReports;
}


/*.................................................Search Area................................................*/

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    let query = searchInput.value.toLowerCase();
    let rows = tbody.children;
    for (let row of rows) {
        let cells = row.children;
        let match = false;
        for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(query)) {
                match = true;
            }
        }
        if (match) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
})

/*......................................................SWITCH PORTAL...............................................*/

function switchPortalT() {
    window.location.href = "teachers.html"
}