import axios from 'axios';

const API_URL = "https://skillkamp-api.com/v1/api";

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  // 'Authorization': 'Bearer YWRtaW46MkEraGpzaEpMRVtHS1N6W2x0IyN3c2tmdzg3c2Zrc2ZGU1dQR01IRCEk',
}

interface Response<T> {
  data: T;
  status: number;
  headers: Record<string, string>;
}

export const get = async <T>(path: string, params?: Object | null, overrideEndPoints?: string, headers = {}): Promise<Response<T>> => {
  const uri = (overrideEndPoints ? overrideEndPoints : API_URL) + path;
  const response = await axios.get(uri, {
    ...defaultHeaders,
    headers,
    params,
  });
  const { status, data } = response;
  return { status, data, headers };
}

export const post = async <T>(path: string, payload?: Object | null, overrideEndPoints?: string, headers = {}): Promise<Response<T>> => {
  const uri = (overrideEndPoints ? overrideEndPoints : API_URL) + path;
  const response = await axios.post(uri, payload, {
    headers: {
      ...defaultHeaders,
      ...headers,
    }
  });
  const { status, data } = response;
  return { status, data, headers};
}

export type APIResponse = [string, number];