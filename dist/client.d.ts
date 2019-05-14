interface ClientState {
    token?: string;
    clientCode?: string;
    adminPassword?: string;
}
interface Options {
    name: string;
}
export declare function createClient(options?: Options): {
    getCompanyLoginToken: (ssn: string) => Promise<string>;
    getCompanyLoginURL: (ssn: string) => Promise<string>;
    login: (clientCode: string, adminPassword: string) => Promise<void>;
    state: () => ClientState;
};
export {};
