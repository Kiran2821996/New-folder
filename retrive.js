const inputValue=document.querySelector(".searchValue")
const findBtn=document.querySelector(".findBtn")
const fetchedData=JSON.parse(localStorage.getItem("data"))
const showdata=document.querySelector(".showdata")


const findData=()=>{
fetchedData.forEach(element => {
        if(inputValue.value==element.AadharNumber){
            let inData=`<div class="card">
            <div>
                <p>Name</p>
                <p>DOB</p>
                <p>adhar</p>
                <p>mobileNumber</p>
                <p>age</p>
            </div>
            <div>
                <p>${element.Name}</p>
                <p>${element.DateofBirth}</p>
                <p>${element.AadharNumber}</p>
                <p>${element.MobileNumber}</p>
                <p>${element.Age}</p>
            </div>
        </div>`
        showdata.innerHTML+=inData
        }
    })

   

}
findBtn.addEventListener("click",findData)