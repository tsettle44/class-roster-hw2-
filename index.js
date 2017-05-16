// const App = {
//     init() {
//         const roster = document.querySelector('form')
//         roster.addEventListener('submit', (ev) => this.runSubmit(ev))
//     },

//     createList() {
//         const name = document.createElement('li')
//         name.textContent = roster.name.input
//         return name
//     },

//     runSubmit(ev) {
//         ev.preventDefault()
//         const roster = ev.target
//         const details = document.querySelector('.details')

//         const list = this.createList()

//         details.appendChild(list)
//     }
    
// }
// App.init()
const roster = document.querySelector('form')

const runSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = document.createElement('li')
    list.textContent = form.personName.value
    details.appendChild(list)
}


roster.addEventListener('submit', runSubmit)



 


