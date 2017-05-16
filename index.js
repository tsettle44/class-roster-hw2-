const App = {
    onRemove(ev) {
        const target = ev.target
        const targetDiv = target.parentNode;

        targetDiv.remove()
    },

    onPromote(ev) {
        const promoteBtn = ev.target
        const promoteDiv = promoteBtn.parentNode;

        promoteDiv.style.backgroundColor = 'yellow'
    },

    runSubmit(ev) {
        ev.preventDefault()
        const form = ev.target
        const details = document.querySelector('.details')

        const list = document.createElement('li')
        list.textContent = form.personName.value
        details.appendChild(list)

        details.insertBefore(list, details.childNodes[0])

        const remove = document.createElement('button')
        remove.textContent = 'Remove'
        remove.style.backgroundColor = 'red'
        remove.style.marginLeft = '5px'
        remove.style.float = 'right'
        list.appendChild(remove)

        const promote = document.createElement('button')
        promote.textContent = 'Promote'
        promote.style.backgroundColor = 'green'
        promote.style.marginLeft = '5px'
        promote.style.float = 'right'
        list.appendChild(promote)

        remove.addEventListener('click', (ev) => this.onRemove(ev))
        promote.addEventListener('click', (ev) => this.onPromote(ev))
    },

    submit() { 
        const roster =  document.querySelector('form')
        roster.addEventListener('submit', (ev) => this.runSubmit(ev))
    },
}

App.submit()



 


