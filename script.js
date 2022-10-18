const addNewPersonBtn = document.querySelector(".add-new-person");
const nameInput = document.querySelector(".name");
const dateOfBirth = document.querySelector(".dateOfBirth");
const adharNumber = document.querySelector(".adharNumber");
const mobileNumber = document.querySelector(".mobileNumber");

// const dynamicRow = document.querySelector(".dynamicRow")

const tbody = document.querySelector(".tbody");

const dataArr = [];
const handleAdd = () => {
  let currentDate = new Date(Date.now());
  let userDate = new Date(dateOfBirth.value);
  let difference = currentDate - userDate;
  const age = Math.floor((difference / (1000 * 60 * 60 * 24)) * 0.0027379);
  const id = Date.now();
  let dynamicrow = document.createElement("tr");
  dynamicrow.setAttribute("id", id);
  dynamicrow.setAttribute("class", "dynamicrow");
  let dynamicTd1=document.createElement("td")
  let input1=document.createElement("input")
  input1.setAttribute("type","text")
  input1.setAttribute("class","name")
  input1.setAttribute("value",nameInput.value)
  dynamicTd1.appendChild(input1)
  let dynamicTd2=document.createElement("td")
  let input2=document.createElement("input")
  input2.setAttribute("type","text")
  input2.setAttribute("class","dateOfBirth")
  input2.setAttribute("value",dateOfBirth.value)
  dynamicTd2.appendChild(input2)
  let dynamicTd3=document.createElement("td")
  let input3=document.createElement("input")
  input3.setAttribute("type","text")
  input3.setAttribute("class","adharNumber")
  input3.setAttribute("value",adharNumber.value)
  dynamicTd3.appendChild(input3)
  let dynamicTd4=document.createElement("td")
  let input4=document.createElement("input")
  input4.setAttribute("type","text")
  input4.setAttribute("class","mobileNumber")
  input4.setAttribute("value",mobileNumber.value)
  dynamicTd4.appendChild(input4)
  let dynamicTd5=document.createElement("td")
  dynamicTd5.setAttribute("value",age)

    let dynamicTd6=document.createElement("td");
    let saveBtn= document.createElement("button");
    saveBtn.setAttribute("class","save");
    saveBtn.innerText="Save"

    saveBtn.setAttribute("id",id)
    let deleBtn=document.createElement("button");
    deleBtn.innerText="delete"
    deleBtn.setAttribute("class","delete");
    deleBtn.setAttribute("value","delete");
    deleBtn.setAttribute("id",id)
//    dynamicTd6.appendChild(saveBtn)
//    dynamicTd6.appendChild(deleBtn)
   dynamicrow.appendChild(dynamicTd1)
   dynamicrow.appendChild(dynamicTd2)
   dynamicrow.appendChild(dynamicTd3)
   dynamicrow.appendChild(dynamicTd4)
   dynamicrow.appendChild(dynamicTd5)
   dynamicrow.appendChild(dynamicTd6)
  tbody.appendChild(dynamicrow) ;
  
  //"Name": "Joe",
  // "Date of Birth": "22/12/1995",
  // "Aadhar Number": "123456789023",
  // "Mobile Number": "1234567890",
  // "Age": "25"

  dataArr.push({
    id: id,
    Name: nameInput.value,
    DateofBirth: dateOfBirth.value,
    AadharNumber: adharNumber.value,
    MobileNumber: mobileNumber.value,
    Age: age,
  });
  console.log(dataArr)


 
};
addNewPersonBtn.addEventListener("click", handleAdd);
const savBtn = document.querySelector(".save");
const deleteBtn = document.querySelector(".delete");
const handleSave = (e) => {
  console.log(e.target.parentElement.parentElement)  
    console.log("click")
  localStorage.setItem("data", JSON.stringify(dataArr));
};
savBtn.addEventListener("click", handleSave);

const handleDelete=()=>{
    console.log("click de")
    localStorage.clear()
}
deleteBtn.addEventListener("click",handleDelete)