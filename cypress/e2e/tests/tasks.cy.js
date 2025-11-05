describe("tarefas", () => {
  context("cadastro", () => {
    const taskName = "Estudar Cypress";
    it("deve cadastrar uma nova tarefa", () => {
      //cy.deleteTask(taskName);

      cy.createTask(taskName);

      // validação
      cy.contains("main div p", taskName).should("be.visible");
    });

    it("não deve permitir tarefa duplicada", () => {

      cy.createTask(taskName);

      // validação
      cy.get(".swal2-html-container")
        .should("be.visible")
        .should("have.text", "Task already exists!");
    });

    it("deve validar campo obrigatório", () => {
      cy.createTask();

      cy.isRequired("This is a required field");
    });
  });
});
