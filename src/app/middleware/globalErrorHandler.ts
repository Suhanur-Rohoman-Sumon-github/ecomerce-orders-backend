import { ErrorRequestHandler, Request, Response } from 'express';

const handleGlobalError: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};

export default handleGlobalError;
