export interface User {
    id: number;
    name: string | undefined;
    role: string | undefined;
    organization: string | undefined;
}

export const userRoleDaraSource = [
    { roleName: 'FrontEnd Developer', id: "1"},
    { roleName: 'QA', id: "2"},
    { roleName: 'DevOps', id: "3"},
    { roleName: 'BackEnd Developer', id: "4"},
    { roleName: 'Data Engineer', id: "5"}
];