describe("tarefas", () => {

  let testData;

  before(() => {
      cy.fixture('tasks').then(t => {
          testData = t;
      })

  });

  context("cadastro", () => {
    const taskName = testData.dup.name;
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

  context("atualizacao", () => {
    it("deve concluir uma tarefa", () => {
        const taskName = "Fazer atividade";

        cy.createTask(taskName);

        cy.visit("/");

        cy.contains('p', taskName)
            .parent()
            .find('button[class*=ItemToggle]')
            .click();

        cy.contains('p', taskName)
            .should('have.css', 'text-decoration-line', 'line-through');
    });
  });

  context("exclusao", () => {
    it("deve excluir uma tarefa", () => {
      const taskName = testData.dup.name;
    
        cy.createTask(taskName);

      cy.visit("/");

      cy.contains('p', taskName)
          .parent()
          .find('button[class*=ItemDelete]')
          .click();

      cy.contains('p', taskName)
          .should('not.exist');
    });
  });
});
