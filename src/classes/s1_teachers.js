let nameTxt = document.getElementById("nameTxt");
let phyTxt1 = document.getElementById("phyTxt1");
let phyTxt2 = document.getElementById("phyTxt2");
let chemTxt1 = document.getElementById("chemTxt1");
let chemTxt2 = document.getElementById("chemTxt2");
let mathsTxt1 = document.getElementById("mathsTxt1");
let bioTxt1 = document.getElementById("bioTxt1");
let bioTxt2 = document.getElementById("bioTxt2");
let geogTxt1 = document.getElementById("geogTxt1");
let hisTxt1 = document.getElementById("hisTxt1");
let ictTxt1 = document.getElementById("ictTxt1");
let ictTxt2 = document.getElementById("ictTxt2");
let entTxt1 = document.getElementById("entTxt1");
let agricTxt1 = document.getElementById("agricTxt1");
let agricTxt2 = document.getElementById("agricTxt2");
let creTxt1 = document.getElementById("creTxt1");
let ireTxt1 = document.getElementById("ireTxt1");
let peTxt1 = document.getElementById("peTxt1");
let peTxt2 = document.getElementById("peTxt2");
let kisTxt1 = document.getElementById("kisTxt1");


var data = document.querySelector("#data");
let wrap = document.querySelector(".wrap");
let tbody = document.querySelector("#tbody")

let inserFlag = '';
function Open() {
    thds.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
        thd.style.display = "none";
        thd.style.height = "0px";
    })
    wrap.style.display = "block";
}
function Add() {
    Open()
    data.innerHTML = "Enter Data"
    UpdateBtn.style.display = 'none'
    SavBtn.style.display = 'block'
}
function Clr() {
    nameTxt.value = "";
    phyTxt1.value = "";
    phyTxt2.value = "";
    chemTxt1.value = "";
    chemTxt2.value = "";
    mathsTxt1.value = "";
    bioTxt1.value = "";
    bioTxt2.value = "";
    geogTxt1.value = "";
    hisTxt1.value = "";
    ictTxt1.value = "";
    ictTxt2.value = "";
    entTxt1.value = "";
    agricTxt1.value = "";
    agricTxt2.value = "";
    creTxt1.value = "";
    ireTxt1.value = "";
    peTxt1.value = "";
    peTxt2.value = "";
    kisTxt1.value = "";
}
function Can() {
    Clr()
    thds.forEach(thd => {
        thd.style.background = "";
        thd.style.color = "";
        thd.style.display = "";
    })
    //theadThd.style.display = "";
    wrap.style.display = "none";
}

window.addEventListener('load', () => getAllData())

function Sav() {

    thds.forEach(thd => {
        thd.style.background = "";
        thd.style.color = "";
        thd.style.display = "";
    })

    let name = nameTxt.value;

    let phy1 = (Number(phyTxt1.value));
    let phy2 = (Number(phyTxt2.value));
    let chem1 = (Number(chemTxt1.value));
    let chem2 = (Number(chemTxt2.value));
    let maths1 = mathsTxt1.value;
    let bio1 = (Number(bioTxt1.value));
    let bio2 = (Number(bioTxt2.value));
    let geog1 = geogTxt1.value;
    let his1 = hisTxt1.value;
    let ict1 = (Number(ictTxt1.value));
    let ict2 = (Number(ictTxt2.value));
    let ent1 = entTxt1.value;
    let agric1 = (Number(agricTxt1.value));
    let agric2 = (Number(agricTxt2.value));
    let cre1 = creTxt1.value;
    let ire1 = ireTxt1.value;
    let pe1 = (Number(peTxt1.value));
    let pe2 = (Number(peTxt2.value));
    let kis1 = kisTxt1.value;
    let idNo = `ST0${Math.floor(Math.random() * 1000 )}`
    let doc

    if (inserFlag == 'phy') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:phy1,phy2:phy2, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'chem') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:chem1,chem2:chem2, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'maths') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:maths1, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'bio') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:bio1,bio2:bio2, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'geog') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:geog1, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'his') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:his1, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'ict') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:ict1,ict2:ict2, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'ent') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:ent1, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'agric') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:agric1,agric2:agric2, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'cre') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:cre1, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'ire') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:ire1, pe1:0,pe2:0, kis1:0}
    }
    } else if (inserFlag == 'pe') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:pe1,pe2:pe2, kis1:0}
    }
    } else if (inserFlag == 'kis') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:kis1}
    }
    } else {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:0,phy2:0, chem1:0,chem2:0, maths1:0, bio1:0,bio2:0, geog1:0, his1:0, ict1:0,ict2:0, ent1:0, agric1:0,agric2:0, cre1:0, ire1:0, pe1:0,pe2:0, kis1:0}
    }
    }
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(doc)
    })
        .then(res => res.json())
        .then(data => getAllData())
        .catch(err => console.log(`Inserting_Doc_Oops: ${err}`))

    Can()
}
function SavDoc() {
    
}
let url = `https://katikamu-sda-3.onrender.com`
let studentsArray
function getAllData() {
    fetch(url, {
        method: 'GET',
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        studentsArray = data
        displayPerformance()
    })
}
function displayPerformance() {
    let number = 0;
    let tr = "";
    studentsArray.forEach((student,i) => {

        let phyMarks = ((Number(student.marks.phy1) + Number(student.marks.phy2))/2)
        let chemMarks = ((Number(student.marks.chem1) + Number(student.marks.chem2))/2)
        let mathsMarks = (Number(student.marks.maths1))
        let bioMarks = ((Number(student.marks.bio1) + Number(student.marks.bio2))/2)
        let geogMarks = (Number(student.marks.geog1))
        let hisMarks = (Number(student.marks.his1))
        let ictMarks = ((Number(student.marks.ict1) + Number(student.marks.ict2))/2)
        let entMarks = (Number(student.marks.ent1))
        let agricMarks = ((Number(student.marks.agric1) + Number(student.marks.agric2))/2)
        let creMarks = (Number(student.marks.cre1))
        let ireMarks = (Number(student.marks.ire1))
        let peMarks = ((Number(student.marks.pe1) + Number(student.marks.pe2))/2)
        let kisMarks = (Number(student.marks.kis1))

        tr += "<tr>"+
        `
        <td> ${number += 1} </td>
        <td class="left"> ${student.stId}</td>
        <td class="left" id="nameTD"> ${student.name} </td>
        <td id="marksTD"> ${phyMarks} </td>
        <td id="marksTD"> ${chemMarks} </td>
        <td id="marksTD"> ${mathsMarks} </td>
        <td id="marksTD"> ${(bioMarks)} </td>
        <td id="marksTD"> ${geogMarks} </td>
        <td id="marksTD"> ${hisMarks} </td>
        <td id="marksTD"> ${ictMarks} </td>
        <td id="marksTD"> ${entMarks} </td>
        <td i=:"marksTD"> ${agricMarks} </td>
        <td id="marksTD"> ${creMarks} </td>
        <td id="marksTD"> ${ireMarks} </td>
        <td id="marksTD"> ${peMarks} </td>
        <td id="marksTD"> ${kisMarks} </td>
        <td id="icon_row">
        <img src="../monitoring.png" class="icon" onclick="View(${i})">
        <img src="../edit.png" class="icon" onclick="UpdateDoc(${i})">
        <img src="../delete.png" class="icon" onclick="Del(${i})">
        </td>

        `+
        "</tr>"
    })
    tbody.innerHTML = tr;
}

//.........................................UPDATING SECTION 
let UpdateBtn = document.getElementById('UpdateBtn');
let SavBtn = document.getElementById('SavBtn');

let uPhy1
let uPhy2
let uChem1
let uChem2
let uMaths1
let uBio1
let uBio2
let uGeog1
let uHis1
let uIct1
let uIct2
let uEnt1
let uAgric1
let uAgric2
let uCre1
let uIre1
let uPe1
let uPe2
let uKis1

let _idFlag
let stIdFlag
function Update() {

    thds.forEach(thd => {
        thd.style.background = "";
        thd.style.color = "";
        thd.style.display = "";
    })

    let Phy1 = uPhy1
    let Phy2 = uPhy2
    let Chem1 = uChem1
    let Chem2 = uChem2
    let Maths1 = uMaths1
    let Bio1 = uBio1
    let Bio2 = uBio2
    let Geog1 = uGeog1
    let His1 = uHis1
    let Ict1 = uIct1
    let Ict2 = uIct2
    let Ent1 = uEnt1
    let Agric1 = uAgric1
    let Agric2 = uAgric2
    let Cre1 = uCre1
    let Ire1 = uIre1
    let Pe1 = uPe1
    let Pe2 = uPe2
    let Kis = uKis1

    let name = nameTxt.value;
    let phy1 = (Number(phyTxt1.value));
    let phy2 = (Number(phyTxt2.value));
    let chem1 = (Number(chemTxt1.value));
    let chem2 = (Number(chemTxt2.value));
    let maths1 = mathsTxt1.value;
    let bio1 = (Number(bioTxt1.value));
    let bio2 = (Number(bioTxt2.value));
    let geog1 = geogTxt1.value;
    let his1 = hisTxt1.value;
    let ict1 = (Number(ictTxt1.value));
    let ict2 = (Number(ictTxt2.value));
    let ent1 = entTxt1.value;
    let agric1 = (Number(agricTxt1.value));
    let agric2 = (Number(agricTxt2.value));
    let cre1 = creTxt1.value;
    let ire1 = ireTxt1.value;
    let pe1 = (Number(peTxt1.value));
    let pe2 = (Number(peTxt2.value));
    let kis1 = kisTxt1.value;
    let idNo = stIdFlag
    let doc

    if (inserFlag == 'phy') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:phy1,phy2:phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'chem') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:chem1,chem2:chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'maths') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'bio') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:bio1,bio2:bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'geog') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'his') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:his1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'ict') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:ict1,ict2:ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'ent') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'agric') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:agric1,agric2:agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'cre') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'ire') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else if (inserFlag == 'pe') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:pe1,pe2:pe2, kis1:kis1}
    }
    } else if (inserFlag == 'kis') {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    } else {
        doc = {
        stId:idNo, 
        name:name, 
        marks:{phy1:Phy1,phy2:Phy2, chem1:Chem1,chem2:Chem2, maths1:Maths1, bio1:Bio1,bio2:Bio2, geog1:Geog1, his1:His1, ict1:Ict1,ict2:Ict2, ent1:Ent1, agric1:Agric1,agric2:Agric2, cre1:Cre1, ire1:Ire1, pe1:Pe1,pe2:Pe2, kis1:kis1}
    }
    }
    
    let updates = doc
    fetch(`${url}/${_idFlag}`,{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updates)
    })
        .then(res => res.json())
        .then(data => getAllData())
        .catch(err => console.log(`Updating_Doc_Oops: ${err}`))
        Can()
    UpdateBtn.style.display = '';
}
function UpdateDoc(index) {
    _idFlag = studentsArray[index]._id
    stIdFlag = studentsArray[index].stId
    nameTxt.value = studentsArray[index].name
    let phy1 = (studentsArray[index].marks.phy1)
    let phy2 = (studentsArray[index].marks.phy2)
    let chem1 = (studentsArray[index].marks.chem1)
    let chem2 = (studentsArray[index].marks.chem2)
    let maths1 = (studentsArray[index].marks.maths1)
    let bio1 = (studentsArray[index].marks.bio1)
    let bio2 = (studentsArray[index].marks.bio2)
    let geog1 = (studentsArray[index].marks.geog1)
    let his1 = (studentsArray[index].marks.his1)
    let ict1 = (studentsArray[index].marks.ict1)
    let ict2 = (studentsArray[index].marks.ict2)
    let ent1 = (studentsArray[index].marks.ent1)
    let agric1 = (studentsArray[index].marks.agric1)
    let agric2 = (studentsArray[index].marks.agric2)
    let cre1 = (studentsArray[index].marks.cre1)
    let ire1 = (studentsArray[index].marks.ire1)
    let pe1 = (studentsArray[index].marks.pe1)
    let pe2 = (studentsArray[index].marks.pe2)
    let kis1 = (studentsArray[index].marks.kis1)

    phyTxt1.value = phy1
    phyTxt2.value = phy2
    chemTxt1.value = chem1
    chemTxt2.value = chem2
    mathsTxt1.value = maths1
    bioTxt1.value = bio1
    bioTxt2.value = bio2
    geogTxt1.value = geog1
    hisTxt1.value = his1
    ictTxt1.value = ict1
    ictTxt2.value = ict2
    entTxt1.value = ent1
    agricTxt1.value = agric1
    agricTxt2.value = agric2
    creTxt1.value = cre1
    ireTxt1.value = ire1
    peTxt1.value = pe1
    peTxt2.value = pe2
    kisTxt1.value = kis1

    uPhy1 = phy1
    uPhy2 = phy2
    uChem1 = chem1
    uChem2 = chem2
    uMaths1 = maths1
    uBio1 = bio1
    uBio2 = bio2
    uGeog1 = geog1
    uHis1 = his1
    uIct1 = ict1
    uIct2 = ict2
    uEnt1 = ent1
    uAgric1 = agric1
    uAgric2 = agric2
    uCre1 = cre1
    uIre1 = ire1
    uPe1 = pe1
    uPe2 = pe2
    uKis1 = kis1

    UpdateBtn.style.display = 'block'
    SavBtn.style.display = 'none'


    if (select.value == '') {

        UpdateBtn.style.position = "relative"
        UpdateBtn.style.bottom = "54px"
        UpdateBtn.style.left = "465px"
        ClrBtn.style.position = "relative"
        ClrBtn.style.top = "227.5px"
        ClrBtn.style.left = "168px"
        // ClrBtn.style.left = "170px"
    }

    Open()
}

//........................DELETING......

let delete_idFlag
function Del(index) {
    delete_idFlag = studentsArray[index]._id
    
    fetch(`${url}/${delete_idFlag}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => getAllData())
        .catch(err => console.log(`Delete_Doc_Oops: ${err}`))
}

/*......................................................SWITCH PORTAL...............................................*/

const adminLogin = document.querySelector(".adminLogin");
const tabSection = document.querySelector(".tabSection");
const thds = document.querySelectorAll("th");
const badgeImage = document.querySelector("#badgeImage");

/*...................................................Select.......................................................*/

let Select = document.querySelector("#select");
let phySection = document.getElementById("phySection");
let chemSection = document.getElementById("chemSection");
let mathsSection = document.getElementById("mathsSection");
let bioSection = document.getElementById("bioSection");
let geogSection = document.getElementById("geogSection");
let hisSection = document.getElementById("hisSection");
let ictSection = document.getElementById("ictSection");
let entSection = document.getElementById("entSection");
let agricSection = document.getElementById("agricSection");
let creSection = document.getElementById("creSection");
let ireSection = document.getElementById("ireSection");
let peSection = document.getElementById("peSection");
let swahiliSection = document.getElementById("swahiliSection");

let ClrBtn = document.getElementById('ClrBtn')
let select = document.querySelector("#select")
select.addEventListener('change', () => {
    inserFlag = select.value

    UpdateBtn.style.position = "relative"
    UpdateBtn.style.top = "-50px"
    UpdateBtn.style.left = "475px"
    SavBtn.style.position = "relative"
    SavBtn.style.top = "-50px"
    SavBtn.style.left = "475px"
    ClrBtn.style.position = "relative"
    ClrBtn.style.top = "40px"
    ClrBtn.style.left = "168px"


    if (Select.value == "phy") {
        phySection.style.display = "block";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    } 
    else if (Select.value == 'chem') {
        phySection.style.display = "none";
        chemSection.style.display = "block";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "maths") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "block";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == 'bio') {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "block";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "geog") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "block";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == 'his') {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "block";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "ict") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "block";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == 'ict') {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "block";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "ent") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "block";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "agric") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "block";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "cre") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "block";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "ire") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "block";
        peSection.style.display = "none";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "pe") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "block";
        swahiliSection.style.display = "none";
        
    }
    else if (Select.value == "kis") {
        phySection.style.display = "none";
        chemSection.style.display = "none";
        mathsSection.style.display = "none";
        bioSection.style.display = "none";
        geogSection.style.display = "none";
        hisSection.style.display = "none";
        ictSection.style.display = "none";
        entSection.style.display = "none";
        agricSection.style.display = "none";
        creSection.style.display = "none";
        ireSection.style.display = "none";
        peSection.style.display = "none";
        swahiliSection.style.display = "block";
        
    }
})


//....................................pRint All
let card = document.querySelector(".card");
let reportDV = document.querySelector(".reportDV");
function View(index) {
    card.style.display = "block";
    
    let Name = studentsArray[index].name;  
    let physics = ((studentsArray[index].marks.phy1 + studentsArray[index].marks.phy2)/2);  
    let chemistry = ((studentsArray[index].marks.chem1 + studentsArray[index].marks.chem2)/2);  
    let maths = studentsArray[index].marks.maths1;  
    let biology = ((studentsArray[index].marks.bio1 + studentsArray[index].marks.bio2)/2);  
    let geography = studentsArray[index].marks.geog1;  
    let history = studentsArray[index].marks.his1;  
    let ICT = ((studentsArray[index].marks.ict1 + studentsArray[index].marks.ict2)/2);  
    let entre = studentsArray[index].marks.ent1;  
    let agriculture = ((studentsArray[index].marks.agric1 + studentsArray[index].marks.agric2)/2);  
    let CRE = studentsArray[index].marks.cre1;  
    let IRE = studentsArray[index].marks.ire1;  
    let PE = ((studentsArray[index].marks.pe1 + studentsArray[index].marks.pe2)/2);  
    let kiswahili = studentsArray[index].marks.kis1;
    let IdNo = studentsArray[index].stId;  

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
                    <img src="../badge.jpeg" alt="Candidate Name" id="sPhoto">
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
    reportDV.innerHTML = report;

    thds.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
        thd.style.display = "none";

    })
}
function closeReport() {
    thds.forEach(thd => {
        thd.style.background = "";
        thd.style.color = "";
        thd.style.display = "";
    })
    card.style.display ="none";
    // location.reload();
}
function printCard() {
    window.print();
}

function printAll(event) {

    thds.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
        thd.style.display = "none";
    })

    let printBtn = document.getElementById("printBtn");
    setTimeout(() => {
        printBtn.style.background = "red"
        printBtn.style.padding = "6px"
    },1)
    setTimeout(() => {
        printBtn.style.background = ""
        printBtn.style.padding = "7px"

    },20)
    card.style.display = "block"
    let stReports = "";
    studentsArray.forEach((st,ii) => {
        let Name = st.name;  
        let physics = ((st.marks.phy1 + st.marks.phy2)/2);  
        let chemistry = ((st.marks.chem1 + st.marks.chem2)/2);  
        let maths = st.marks.maths1;  
        let biology = ((st.marks.bio1 + st.marks.bio2)/2);  
        let geography = st.marks.geog1;  
        let history = st.marks.his1;  
        let ICT = ((st.marks.ict1 + st.marks.ict2)/2);  
        let entre = st.marks.ent1;  
        let agriculture = ((st.marks.agric1 + st.marks.agric2)/2);  
        let CRE = st.marks.cre1;  
        let IRE = st.marks.ire1;  
        let PE = ((st.marks.pe1 + st.marks.pe2)/2);  
        let kiswahili = st.marks.kis1;
        let IdNo = st.stId;
        
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
                <img src="../badge.jpeg" alt="Candidate Name" id="sPhoto">
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
    reportDV.innerHTML = stReports;
}


///.............................................FILTERING............

let selectFilter = document.getElementById('selectFilter');
selectFilter.addEventListener('change', () => getByFilter())

function getByFilter() {
    let filterQuery = selectFilter.value;
    
    fetch(`${url}/${filterQuery}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            studentsArray = data
            displayPerformance()
        })
}


/*.................................................Search Area................................................*/

let searchInput = document.getElementById("searchInput");
searchInput.addEventListener('input', () => {
    let query = searchInput.value.toLowerCase();
    let rows = tbody.children;

    for (let row of rows ) {
        let cells = row.children;
        let match = false;
        for (let cell of cells) {
            if (cell.textContent.toLowerCase().includes(query)) {
                match = true
            }
        }
        if (match) {
            row.style.display = ''
        } else {
            row.style.display = 'none'
        }
    }
})


/*......................................................SWITCH PORTAL...............................................*/

const adminLoginu = document.querySelector(".adminLogin");
const tabSectionu = document.querySelector(".tabSection");
const thdsu = document.querySelectorAll("th");
const badgeImageu = document.querySelector("#badgeImage");
function switchPortalA() {
    adminLoginu.style.display = "block";
    tabSectionu.style.display = "none";
    badgeImageu.style.width = "0px";
    thdsu.forEach(thd => {
        thd.style.background = "transparent";
        thd.style.color = "transparent";
        thd.style.display = "none";
    })
}
function closeLoginCard() {
    tabSectionu.style.display = "";
    badgeImageu.style.width = "";
    adminLoginu.style.display = "";
    thdsu.forEach(thd => {
        thd.style.background = "";
        thd.style.color = "";
        thd.style.display = "";
    })
}

let userName = document.getElementById("userName");
const psword = document.getElementById("Password")
const wrong = document.getElementById("wrong")

let requiredName = "admin";
let requiredPsword = "1234";
function logIn() {
    if (userName.value.toLowerCase() == requiredName && psword.value.toLowerCase() == requiredPsword) {
        window.location.href = "../admin.html";
        
    } else {
        wrong.style.display = "block";
    }
}
userName.value = "";
psword.value = "";
userName.addEventListener("input",() => {
    wrong.style.display = "none";
})


///>>>>>>>>>REFRESHING THE PAGE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Refresh() {
    window.location.reload()
}

