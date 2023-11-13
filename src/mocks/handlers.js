import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/test", () => {
    return new HttpResponse("hello, world!");
  }),
  http.get("/api/invalid", () => {
    return new HttpResponse("404 not found", {
	  status: 404,
	  headers: {
	    'Content-Type': 'text/plain',
	  },
	})
  }),
];
