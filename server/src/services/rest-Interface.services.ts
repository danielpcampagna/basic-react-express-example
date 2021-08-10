import axios, { AxiosInstance } from "axios";

export interface IRestServiceProps {
  baseUrl: string;
  timeout: number;
}

export abstract class IRestService<T> {
  static BASE_ROUTE_URL: string;
  protected client: AxiosInstance;

  constructor({ baseUrl, timeout=1000 }: IRestServiceProps) {
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
    });;
  }

  get(id: string | number): Promise<void | T> {
    const baseUrl = `${IRestService.BASE_ROUTE_URL}/${id}/`;
    return this.client.get(baseUrl).then((res) => res.data);
  }
  
  getAll(): Promise<void | T[]> {
    const baseUrl = IRestService.BASE_ROUTE_URL;
    return this.client.get(baseUrl).then((res) => res.data);
  }
  
  post(data: T): Promise<void> {
    return this.client.post(IRestService.BASE_ROUTE_URL, data);
  }
  
  path(id: string | number, data: Partial<T>): Promise<void> {
    const baseUrl = id ? `${IRestService.BASE_ROUTE_URL}/${id}/` : IRestService.BASE_ROUTE_URL;
    return this.client.patch(baseUrl, data);
  }
  
  put(id: string | number, data: Partial<T>): Promise<void> {
    const baseUrl = id ? `${IRestService.BASE_ROUTE_URL}/${id}/` : IRestService.BASE_ROUTE_URL;
    return this.client.put(baseUrl, data);
  }
  
  delete(id: string | number): Promise<void> {
    const baseUrl = id ? `${IRestService.BASE_ROUTE_URL}/${id}/` : IRestService.BASE_ROUTE_URL;
    return this.client.delete(baseUrl);
  }
}