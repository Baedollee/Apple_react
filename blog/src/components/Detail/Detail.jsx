import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Detail = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const { id } = params;
  const listItem = useSelector((state) => state.listReducer.list);

  useEffect(() => {
    if (!listItem || listItem.length <= 0) {
      return;
    }
    listItem.map((item, index) => {
      if (item.id === id) {
        setItem(item);
        return;
      }
    });
    return () => {
      setItem({});
    };
  }, [id, listItem]);

  if (!item || !item.id || !item.title || !item.contents) {
    return <></>;
  }

  return (
    <div>
      <p>{item.id}</p>
      <p>{item.title}</p>
      <p>{item.contents}</p>
    </div>
  );
};
export default Detail;
