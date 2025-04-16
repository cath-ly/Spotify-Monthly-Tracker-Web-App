declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        NEXT_PUBLIC_USER_ID: string;
        USER_PW: string;
      }
    }
  }
  
  export {}