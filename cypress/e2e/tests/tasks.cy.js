describe ('tarefas', () => {
    it('deve cadastrar uma nova tarefa', () => {
        cy.visit ('http://localhost:3000/')

        cy.get('#newTask')
    })
})