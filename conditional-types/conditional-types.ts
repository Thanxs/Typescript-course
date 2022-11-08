interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const successResp: HTTPResponse<'success'> = {
  code: 201,
  data: 'Succeded',
}

const errorResp: HTTPResponse<'failed'> = {
  code: 500,
  data: new Error('Server is blocked')
};