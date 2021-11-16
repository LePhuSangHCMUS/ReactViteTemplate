export interface IUserProfile {
  address?: any,
  companyDetails?: any,
  dateOfBirth?: any,
  email?:string,
  firstName?:string,
  lastName?:string,
  isAdmin?:boolean,
  isSaleManager: boolean
  isSaleManager2: boolean
  isSeller: boolean
  permissions?: Array<string>,
  phone?:string,
  photo?: string,
  views:any
}
