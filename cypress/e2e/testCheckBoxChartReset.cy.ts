describe("都道府県の選択，チャートの表示，人口データ切り替え，都道府県のリセットをテスト", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("チェックボックスをクリックするとチャートが表示される。", () => {
    cy.get(".prefCheckbox").should("be.visible");

    cy.get(".prefCheckbox").each((checkbox) => {
      cy.wrap(checkbox).click();
      cy.get(".chart").should("be.visible");
    });
  });

  it("ラジオボタンをクリックするとチャートが変わる。", () => {
    cy.get(".prefCheckbox").first().click();
    cy.get(".chart").should("be.visible");

    cy.get(".radioItem").each((radio) => {
      let initialChartSVG: string;
      cy.get("svg.recharts-surface").then(($svg) => {
        initialChartSVG = $svg[0].outerHTML;
      });
      cy.wrap(radio).click();
      cy.get("svg.recharts-surface").then(($svg) => {
        const updatedSVG = $svg[0].outerHTML;
        expect(updatedSVG).not.to.equal(initialChartSVG);
      });
    });
  });

  it("リセットボタンをクリックすると都道府県の選択がリセットされ，チャートが非表示になる。", () => {
    cy.get(".prefCheckbox").first().click();
    cy.get(".chart").should("be.visible");

    cy.get(".resetButton").click();
    cy.get(".prefCheckbox").each((checkbox) => {
      cy.wrap(checkbox).should("not.be.checked");
    });

    cy.get(".chart").should("not.exist");
  });
});
