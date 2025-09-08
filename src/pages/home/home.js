import React from "react";

function Home() {
  return (
    <div>
      <ul className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#/">قالب</a>
        </li>
        <li className="breadcrumb-item active">صفحه راه‌‌اندازی</li>
      </ul>

      <h1 className="page-header">
        صفحه راه‌‌اندازی{" "}
        <small>توضیحات هدر صفحه در اینجا قرار می‌گیرد...</small>
      </h1>

      <p>صفحه خود را در اینجا بسازید</p>
    </div>
  );
}

export default Home;
