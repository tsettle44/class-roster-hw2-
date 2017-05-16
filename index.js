const App = {

    runSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')

        const list = document.createElement('li')
        list.textContent = form.personName.value
        details.appendChild(list)
    },

    submit() { 
        const roster =  document.querySelector('form')
        roster.addEventListener('submit', (ev) => this.runSubmit(ev))
    },
}

App.submit()



 


