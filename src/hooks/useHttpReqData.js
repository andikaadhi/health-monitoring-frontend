import { useEffect, useRef, useState } from 'react';
import useHttpReq from './useHttpReq';

const useHttpReqData = (
  { defaultLoadingState = true, ...params },
  dependencies = [],
) => {
  const [response, setResponse] = useState({
    data: undefined,
    error: undefined,
    isLoading: defaultLoadingState,
  });

  const { request, isLoading } = useHttpReq({ ...params, useLoading: false });

  const requestRef = useRef(request);
  requestRef.current = request;

  useEffect(() => {
    const fetch = async () => {
      setResponse((curr) => ({ ...curr, isLoading: true }));
      const { data, error } = await requestRef.current();
      setResponse({ data, error, isLoading: false });
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { request, isLoading, ...response };
};

export default useHttpReqData;
