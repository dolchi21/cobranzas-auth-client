import * as Lib from '..'

async function main() {
    
    const ADB = Lib.createClient()
    await ADB.login('ADB', 'adbtest')

    const DER = Lib.createClient()
    await DER.login('DER', 'Demos2018.i')

    console.log('logged in')
    const urls = await Promise.all([
        ADB.getCompanyLoginURL('30555555555'),
        DER.getCompanyLoginURL('30555555555'),
    ])
    console.log(urls)
}

main().catch(err => console.error(err))
