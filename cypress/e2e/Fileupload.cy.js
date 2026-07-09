describe('File Upload', () => {
    // cypress-file-upload  - plugin
    // npm install --save-dev cypress-file-upload
    it.skip('Single file', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("input[id='file-upload']").attachFile("t1.txt");
        cy.get("input[id='file-submit']").click();
        cy.wait(5000);
        cy.get("div[id='content'] h3").should('have.text', 'File Uploaded!')
    });
    it.skip('File upload rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("input[id='file-upload']").attachFile({ filePath: "t1.txt", fileName: "myfile.txt" });
        cy.get("input[id='file-submit']").click();
        cy.wait(5000);
        cy.get("div[id='content'] h3").should('have.text', 'File Uploaded!')

    });
    it.skip('File upload - drag and drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("div[id='drag-drop-upload']").attachFile("t1.txt", { subjectType: 'drag-n-drop' });
        cy.wait(5000);
        cy.get("div[id='drag-drop-upload'] div[class='dz-filename'] span").should('have.text', 't1.txt');
    });
    it.skip('Upload multiple files', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get("input[id='filesToUpload']").attachFile(["t1.txt", "t2.txt"]);
        cy.wait(5000);
        cy.get("ul[id='fileList']").should('not.have.text', 'No Files Selected');


    });
    it.only('File Upload - Shadow dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/");
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile("t1.txt");
        cy.wait(5000);
    });
})