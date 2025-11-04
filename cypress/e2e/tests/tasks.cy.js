
describe("tarefas", () => {
  it("deve cadastrar uma nova tarefa", () => {

    cy.request ({
        url: 'http://localhost:3000/helper/tasks',
        method: 'DELETE',
        body: {name: 'Estudar Cypress'}
    }).then(response => {
        expect(response.status).to.eq(204);
    });

    cy.visit("http://localhost:3000/");

    cy.get('input[placeholder="Add a new Task"]')
      .type('Estudar Cypress');


    cy.contains('button', 'Create').click()

  });
});
