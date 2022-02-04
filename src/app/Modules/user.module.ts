
  export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ResponserUsers
{
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
}

//modelo para criação
export interface RequestCreate {
  name: string;
  job: string;
}
//resultado response
export interface ResponseCreate {
name: string;
job: string;
id: string;
createdAt: Date;
}
