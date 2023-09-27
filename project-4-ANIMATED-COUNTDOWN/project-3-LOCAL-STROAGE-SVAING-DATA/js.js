const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote('hello world'))

const notes = JSON.parse(localStorage.getItem('notes'))
if (notes) {
    notes.forEach(note => addNewNote(note))
}

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
        <button class="h1">#</button>
        

    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const EditBtn = note.querySelector('.edit');
    const DlelteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    const h1 = note.querySelector('.h1')

    textArea.value = text
    main.innerHTML = marked(text)


    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
    })

    DlelteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })

    EditBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
        updateLS()
    })



    document.body.appendChild(note)
}

function updateLS() {
    const notetext = document.querySelectorAll('textarea')

    const notes = []

    notetext.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}