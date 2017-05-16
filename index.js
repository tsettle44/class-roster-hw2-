const App = {
    onRemove() {

    },

    onPromote() {

    },

    runSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')

        const list = document.createElement('li')
        list.textContent = form.personName.value
        details.appendChild(list)

        const remove = document.createElement('button')
        remove.textContent = 'Remove'
        remove.style.backgroundColor = 'red'
        remove.style.marginLeft = '5px'
        details.appendChild(remove)

        const promote = document.createElement('button')
        promote.textContent = 'Promote'
        promote.style.backgroundColor = 'green'
        promote.style.marginLeft = '5px'
        details.appendChild(promote)

        remove.addEventListener('click', () => this.onRemove)
        promote.addEventListener('click', () => this.onPromote())
    },

    submit() { 
        const roster =  document.querySelector('form')
        roster.addEventListener('submit', (ev) => this.runSubmit(ev))
    },
}

App.submit()



 


