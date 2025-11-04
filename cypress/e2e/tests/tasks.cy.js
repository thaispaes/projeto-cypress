describe("tarefas", () => {
  it("deve cadastrar uma nova tarefa", () => {
    const taskName = "Estudar Cypress";

    cy.deleteTask(taskName);

    cy.createTask(taskName);

    // validação
    cy.contains("main div p", taskName).should("be.visible");
  });

  it("não deve permitir tarefa duplicada", () => {
    const taskName = "Estudar jAvaScript";

    cy.createTask(taskName);

    // validação
    cy.get(".swal2-html-container")
      .should("be.visible")
      .should("have.text", "Task already exists!");
  });

  it("deve validar campo obrigatório", () => {
    cy.createTask();

    cy.get(`input[placeholder="Add a new Task"]`)
        .invoke("prop", "validationMessage")
        .should((text) => {
            expect(text).to.equal("This is a required field");
        })
  });
});
