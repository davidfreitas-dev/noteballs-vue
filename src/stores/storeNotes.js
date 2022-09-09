import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return { 
            notes: []
        }
    },
    actions: {
        addNote() {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0')
            const months = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            const month = date.getMonth()

            const note = {
                id: uuidv4(),
                content: '',
                dtRegister: `${day} de ${months[month]}`
            }

            this.notes.unshift(note)
        },
    },
})