export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  lastLoggedInDate?: string;
  failedLoginAttempts: number;
}
