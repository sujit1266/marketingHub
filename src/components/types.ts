// components/types.ts
export interface FormData {
     name: string;
     email: string;
     message: string;
     number: string;
     companyName: string;
     service: string;
   }
   
   export interface FormErrors {
     name?: string;
     email?: string;
     message?: string;
     number?: string;
     companyName?: string;
     service?: string;
   }