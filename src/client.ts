import axios from 'axios'

interface ClientState {
    token?: string
    clientCode?: string
    adminPassword?: string
}
interface Options {
    name: string
}

function makeState(): ClientState {
    return {}
}

export function createClient(options?: Options) {
    const state = makeState()

    async function login(clientCode: string, adminPassword: string) {
        Object.assign(state, {
            clientCode, adminPassword
        })
    }
    async function getCompanyLoginToken(ssn: string): Promise<string> {
        return await CompanyLoginToken(state.clientCode, state.adminPassword, ssn)
    }
    async function getCompanyLoginURL(ssn: string): Promise<string> {
        const token = await CompanyLoginToken(state.clientCode, state.adminPassword, ssn)
        return 'https://www.cobranzas.com/api/v1/session/fromToken/?token=' + token
    }
    return {
        getCompanyLoginToken,
        getCompanyLoginURL,
        login,
        state: () => state,
    }
}

async function CompanyLoginToken(clientCode: string, adminPassword: string, ssn: string): Promise<string> {
    const res = await axios.post('https://www.cobranzas.com/api/v1/client/suppliers/access_token/', {
        client: clientCode,
        password: adminPassword,
        supplier: ssn,
    })
    return res.data.data.token
}