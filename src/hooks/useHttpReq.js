import {
  useState, useEffect, useRef, useContext,
} from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';

const { CancelToken } = axios;

const useHttpReq = ({
  method: defaultMethod = 'get',
  path: defaultPath,
  baseUrl: defaultBaseUrl,
  reqConfig = {},
  query: defaultQuery,
  callback: defaultCallback,
  defaultLoadingState = false,
  useLoading = true,
}) => {
  const { authToken } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(defaultLoadingState);
  const cancelRef = useRef();

  const handleResponse = (response, callback) => {
    // @ts-ignore
    const { error, data } = response;

    if (callback) callback(error, data);

    return useLoading && setIsLoading(false);
  };

  const request = async (...params) => {
    const callback = typeof params[params.length - 1] === 'function'
      ? params[params.length - 1]
      : defaultCallback;

    const {
      method = defaultMethod,
      baseUrl = defaultBaseUrl,
      body = null,
      path = defaultPath,
      config = reqConfig,
      query = defaultQuery,
    } = typeof params[0] === 'object' ? params[0] : {};

    try {
      if (useLoading) setIsLoading(true);

      const response = await axios({
        method,
        baseURL: baseUrl,
        url: path,
        data: body,
        query,
        cancelToken: new CancelToken((c) => {
          cancelRef.current = c;
        }),
        headers: {
          // origin: "https://nirvanastore.id",
          Authorization: `Bearer ${authToken}`,
        },
        ...config,
      });

      handleResponse(response, callback);

      return response;
    } catch (error) {
      handleResponse({ error }, callback);
      return { error };
    }
  };

  // cancel when unmounting
  useEffect(
    () => () => {
      if (cancelRef.current) cancelRef.current();
    },
    [],
  );

  return { request, isLoading };
};

export default useHttpReq;
