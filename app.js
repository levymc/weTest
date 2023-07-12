
import { Builder, By, Key, until } from 'selenium-webdriver';

async function runScript() {
    const driver = await new Builder().forBrowser('chrome').build();
  
    try {
        await driver.get('http://localhost:8080/WeHandle/');
    
        const loginInput = await driver.findElement(By.xpath('//*[@id="login"]'));
        await loginInput.sendKeys('wh.terceiro');

        const senhaInput = await driver.findElement(By.xpath('//*[@id="senha"]'));
        await senhaInput.sendKeys('wh.terceiro1!A');
    
        const btbnLogin = await driver.findElement(By.xpath('//*[@id="form-login"]/div[3]/button'));
        await btbnLogin.click();
    
        await driver.sleep(2000);
    
        const btnServico = await driver.findElement(By.xpath('//*[@id="datatables-padrao"]/tbody/tr[2]/td[9]/button'));
        await btnServico.click();

        await driver.sleep(2000);
    
        const btnFuncionarios = await driver.findElement(By.xpath('//*[@id="funcionarios"]'));
        await btnFuncionarios.click();

        await driver.sleep(2000)
    
        const divsAlocar = await driver.findElements(By.className('header-card-membro-off'));
        for (const div of divsAlocar) {
            await div.click()
            await driver.sleep(1000)
        }
    
        await driver.sleep(5000)
    } finally {
        await driver.quit()
    }
  }
  
  runScript();
