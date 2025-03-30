declare module 'express' {
  import { Router as ExpressRouter } from 'express-serve-static-core';
  
  export interface Request {
    params: {
      [key: string]: string;
    };
  }
  
  export interface Response {
    status(code: number): Response;
    json(body: any): Response;
  }

  export function Router(): ExpressRouter;
  export { ExpressRouter as Router };
} 