import express, { urlencoded, static as _static } from "express";
import { join } from "path";
import stocksRouter from "@/utils/routes/stocks";

const api = express();

api.use(
  urlencoded({
    extended: false,
  })
);
api.use(_static(join(__dirname, "public")));

// Add headers before the routes are defined
api.use(function (_req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'https://scintillating-toffee-28fea0.netlify.app');
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next layer of middleware
  next();
});

api.use("/api/stocks", stocksRouter);

export const config = {
  api: {
    // Proxy middleware will handle requests itself, so Next.js should
    // ignore that our handler doesn't directly return a response
    externalResolver: true,
    // Pass request bodies through unmodified so that the origin API server
    // receives them in the intended format
    bodyParser: false,
  },
};

export default api;
