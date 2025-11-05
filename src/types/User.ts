export interface UserData {
  name: string;
  login: string;
  bethday: string;
}

export default interface User {
  data?: UserData;
  auth: boolean;
  authToken?: string;
  error?: string;
  isLoading: boolean;
}
