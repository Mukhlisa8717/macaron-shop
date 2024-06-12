import React, { useEffect, useState } from "react";
import "./Products.scss";
import { useGetProductsQuery } from "../../context/productApi";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { SlBag } from "react-icons/sl";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Model from "../model/Model";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Skeleton from "../skeleton/Skeleton";

const API_URL = "https://dummyjson.com";

const Products = () => {
  let [offset, setOffset] = useState(1);
  let [selectedCategory, setSelectedCategory] = useState("/");
  let { data, isLoading } = useGetProductsQuery({
    params: { limit: 6 * offset },
    path: selectedCategory,
  });
  let { data: categories } = useGetCategoryQuery();

  const [searchParams, setSearchParams] = useSearchParams()
  const [detailData, setDetailData] = useState(null)
  document.body.style.overflow = detailData ? "hidden" : "auto"

  useEffect(() => {
    let id = searchParams.get("detail")
    axios
    .get(`${API_URL}/products/${id}`)
    .then(res => setDetailData(res.data))
  }, [searchParams])

  const closeDetailModel = () => {
    setDetailData(null)
    setSearchParams({})
  }

    if (isLoading) {
      return <Skeleton count={8} />;
    }

  return (
    <section>
      <div className="container products">
        <h1>Готовые наборы</h1>
        <ul className="products__category">
          <li>
            <data
              onClick={(e) => setSelectedCategory(e.target.value)}
              value="/"
            >
              All
            </data>
          </li>
          {categories?.map((el) => (
            <li key={el}>
              <data
                onClick={(e) => setSelectedCategory(e.target.value)}
                value={`/category/${el}`}
              >
                {el}
              </data>
            </li>
          ))}
        </ul>
        <div className="products__cont">
          <div className="products__list">
            {data?.products?.map((el) => (
              <div
                onClick={() => setSearchParams({ detail: el.id })}
                key={el.id}
                className="products__list-item"
              >
                <img src={el.images[0]} alt="" width={200} />
                <div className="products__list-item-content">
                  <h3>{el.title}</h3>
                  <p>
                    {el.description.length > 100
                      ? el.description.slice(0, 60) + "..."
                      : el.description}
                  </p>
                  <div className="products__list-item-content-info">
                    <h2>{el.price} $</h2>
                    <button>
                      <SlBag /> <span>В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setOffset((prevOffset) => prevOffset + 1)}
            className="seeMore__btn"
          >
            Показать еще
          </button>
        </div>
      </div>
      {detailData ? (
        <Model close={closeDetailModel}>
          <div className="product__detail">
            <button onClick={() => closeDetailModel()} className="close__btn">
              <IoIosCloseCircleOutline size={24}/>
            </button>
            <img src={detailData.images[0]} alt="image" width={"50%"} />
            <div className="product__detail-info">
              <h2>{detailData.title}</h2>
              <p>{detailData.description}</p>
              <div className="product__detail-info-price">
                <h3>{detailData.price} $</h3>
                <h4>{detailData.warrantyInformation}</h4>
              </div>
            </div>
          </div>
        </Model>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Products;
