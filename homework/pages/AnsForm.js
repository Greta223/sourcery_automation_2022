class AnsForm {

    constructor(page) {
      this.page = page;
    }

    async clickCalcButton() {
        await this.page.locator('#calculateButton').click();
    }
}

module.exports = { AnsForm };