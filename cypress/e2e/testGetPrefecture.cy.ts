describe("都道府県一覧のチェックボックスが表示されるか確認", () => {
  it("APIリクエストが成功すれば，チェックボックス一覧が表示される。", () => {
    cy.intercept(
      "GET",
      "/api/trpc/getPrefectureList,getPopulation?batch=1&input=%7B%221%22%3A%7B%22prefCodes%22%3A%5B%5D%7D%7D",
    ).as("getData");

    cy.visit("http://localhost:3000");

    cy.wait("@getData");

    cy.get(".prefCheckbox").should("be.visible");

    cy.get(".prefCheckbox").should("have.length", 47);
  });
});
