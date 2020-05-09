import { ErrorType } from '@Type/errorType';

interface IError {
  name: string;
  code: number;
}

const Errors: { [key in ErrorType]: IError } = {
  Not_Found: {
    name: 'Not Found',
    code: 404,
  },
  Wrong_Data: {
    name: 'Wrong Data',
    code: 412,
  },
  Database_Error: {
    name: 'Database Error',
    code: 500,
  },
  Exist_Data: {
    name: 'Exist Data',
    code: 412,
  },
  Forbidden: {
    name: 'Forbidden',
    code: 403,
  },
  Wrong_Request: {
    name: 'Wrong_Request',
    code: 401,
  },
  Token_Expired: {
    name: 'Token_Expired',
    code: 401,
  },
  Unhandled_Error: {
    name: 'Unhandled_Error',
    code: 520,
  },
};

export default Errors;
