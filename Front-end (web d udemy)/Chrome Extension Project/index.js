let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

 // localStorage.setItem("myName" , "sumi")
  // let name=localStorage.getItem("myName")
  localStorage.clear()
  console.log(name)
inputBtn.addEventListener("click", function() {
  // console.log("Button clicked")

  myLeads.push(inputEl.value)
  console.log(myLeads)
  inputEl.value = " "
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
<a target='_blank' href='${myLeads[i]} '>
${myLeads[i]}
</a>
</li> `

  }
  ulEl.innerHTML = listItems
}
