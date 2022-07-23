// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    }); 

    test('Adding -2 and -3 results in -5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
    }); 

    test('Adding 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    }); 

    
    test('Adding -2 and 1 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    }); 

    test('Adding 2 and -1 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    }); 

    test('Adding a and b results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    }); 

    test('Adding 10 000 and 10 000 results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10 000');
      await page.locator('#number2Field').type('10 000');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Adding blank space and blank space results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

  });

  test.describe(version + ': Subtract', () => {
    test('Subtracting 2 and 3 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    }); 

    test('Subtracting -2 and -3 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    }); 

    test('Subtracting 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    }); 

    test('Subtracting -2 and 1 results in -3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-3');
    }); 

    test('Subtracting 2 and -1 results in 3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('3');
    }); 

    test('Subtracting 10 000 and 10 000 results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10 000');
      await page.locator('#number2Field').type('10 000');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Subtracting blank space and blank space results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

    
    test('Subtracting a and b results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    }); 

  });

  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    }); 

    test('Multiplying -2 and -3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    }); 

    test('Multiplying 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    }); 


    test('Multiplying -2 and 1 results in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-2');
    }); 

    test('Multiplying a and b results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    }); 

    test('Multiplying 10 000 and 10 000 results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10 000');
      await page.locator('#number2Field').type('10 000');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Multiplying blank space and blank space results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });

  });

  test.describe(version + ': Divide', () => {
    test('Dividing 6 and 3 results in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    }); 

    test('Dividing -12 and -3 results in 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-12');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
    }); 

    test('Dividing a and b results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    }); 

    test('Dividing 10 000 and 10 000 results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10 000');
      await page.locator('#number2Field').type('10 000');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Dividing 10 and 2.5 results in 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('10');
      await page.locator('#number2Field').type('2.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
    });

    test('Dividing 2.5 and 2.5 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('2.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
     
    test('Dividing 2.5 and 1 results in 2.5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('1');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('2.5');
    });

  });

  test.describe(version + ': Concatenate', () => {
    test('Concatenating 6 and 3 results in 63', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('63');
    });

    test('Concatenating -6 and -3 results in -6-3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('-6-3');
    });

    test('Concatenating blank space and blank space results in blank space', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });

    test('Concatenating a and b results in ab', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('b');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('ab');
    });

    test('Concatenating 1.5 and 1.5 results in 1.51.5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1.5');
      await page.locator('#number2Field').type('1.5');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();     
      await expect(page.locator('#numberAnswerField')).toHaveValue('1.51.5');
    });
    
    
  });

});

