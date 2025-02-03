const input = document.getElementById("input")
const setbtn = document.getElementById("setbtn")
const divlist = document.getElementById("list")
let count = 0
setbtn.addEventListener('click', () => {
    const input = document.getElementById("input").value;

    count++

    let mtn = { name: `${input}`, numb: `${count}` }
    localStorage.setItem("info", JSON.stringify(mtn))
    let data = JSON.parse(localStorage.getItem("info"))
    divlist.textContent = `${data.numb}=>  ${data.name}`
})
