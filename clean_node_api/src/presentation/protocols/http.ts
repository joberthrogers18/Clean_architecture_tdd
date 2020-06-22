export interface HttpResponse {
  statusCode: number;
  body: any;
}

// the "?" between attribute and ":" mean: "optional"
export interface HttpRequest {
  body?: any;
}
