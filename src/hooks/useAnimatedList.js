import { useEffect, useState, useRef } from 'react';

const dataDefaultValue = [];

const useAnimatedList = ({ data = dataDefaultValue, idKeyName }) => {
  const [result, setResult] = useState(
    data.map((item, index) => ({ ...item, index })),
  );
  const isInitialRender = useRef(true);

  const createNewOrder = useRef();
  createNewOrder.current = (updatedData) => {
    const updatedDataMap = {};
    updatedData.forEach((item, index) => {
      updatedDataMap[item[idKeyName]] = { ...item, index };
    });

    const newOrder = [];
    const currData = result;
    currData.forEach((item) => {
      if (!updatedDataMap[item[idKeyName]]) return null;

      const newIndex = updatedDataMap[item[idKeyName]].index;
      newOrder.push({
        ...updatedDataMap[item[idKeyName]],
        index: newIndex,
      });
      delete updatedDataMap[item[idKeyName]];
    });

    return [
      ...newOrder,
      ...Object.keys(updatedDataMap).map((id) => updatedDataMap[id]),
    ];
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return null;
    }

    const newOrder = createNewOrder.current(data);
    return setResult(newOrder);
  }, [data]);

  return [result];
};

export default useAnimatedList;
