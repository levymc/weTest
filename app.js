
import { Builder, By, Key, until } from 'selenium-webdriver';
import dotenv from 'dotenv'

dotenv.config()

async function runScript() {

    const driver = await new Builder().forBrowser('chrome').build();
    const url = String(process.env.URL)
    const user = String(process.env.US)
    const pass = String(process.env.PASS)
    try {
        await driver.get(url);
    
        const loginInput = await driver.findElement(By.xpath('//*[@id="login"]'))
        await loginInput.sendKeys(user)

        const senhaInput = await driver.findElement(By.xpath('//*[@id="senha"]'))
        await senhaInput.sendKeys(pass)
    
        const btbnLogin = await driver.findElement(By.xpath('//*[@id="form-login"]/div[3]/button'))
        await btbnLogin.click()
    
        await driver.sleep(5000) // Talvez tenha que aumentar aqui, tava em 2sg e nao foi o suficiente
    
        const btnServico = await driver.findElement(By.xpath('//*[@id="datatables-padrao"]/tbody/tr[2]/td[9]/button'))
        await btnServico.click()

        await driver.sleep(2000)
    
        const btnFuncionarios = await driver.findElement(By.xpath('//*[@id="funcionarios"]'))
        await btnFuncionarios.click()

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
  
runScript()
