class CalcForm {

    constructor(page) {
      this.page = page;
    }

    async enterFirstNumber(number) {
        await this.page.locator('#number1Field').type(number);
    } 

    async enterSecondNumber(number) {
      await this.page.locator('#number2Field').type(number);
  } 
    
    async selectOperation(option) {
      await this.page.selectOption('#selectOperationDropdown', {label: option});
  } 
}

module.exports = { CalcForm };