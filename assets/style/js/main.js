const setbtn = document.getElementById("setbtn");
const divlist = document.getElementById("list");

setbtn.addEventListener("click", () => {
    const input = document.getElementById("input").value.trim();
    if (!input) return;

    let data = JSON.parse(localStorage.getItem("data")) || [];

    const exists = data.some(item => item.name === input);
    if (exists) {
        alert("Already exists.");
        return;
    }

    let mtn = { name: input, numb: data.length + 1 };
    data.push(mtn);
    localStorage.setItem("data", JSON.stringify(data));

    const div = document.createElement("div");
    div.textContent = `${mtn.numb} => ${mtn.name}`;
    divlist.appendChild(div);
});
