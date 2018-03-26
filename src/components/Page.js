import React from 'react';

const Page = () => {
  const getList = () => {
    let list = [];
    let n = 10;
    for (let i = 1; i < n; i++) {
      list.push(i);
    }
    return list;
  };

  const list = getList().map(i => {
    return <a key={i}>{i}</a>;
  });

  return (
    <div className="page">
      <a>
        <i className="fas fa-angle-left" />
      </a>
      {list}
      <a>
        <i className="fas fa-angle-right" />
      </a>
    </div>
  );
};

export default Page;
