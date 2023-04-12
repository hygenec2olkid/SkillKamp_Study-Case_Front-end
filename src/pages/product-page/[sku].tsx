import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductsAPI from "@/api/products";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Color from "@/components/color";
import Size from "@/components/size";
import { Heart } from "react-feather";
import Buy from "@/templates/Buynow";
import Chart from "@/templates/Slide-overs";

const ProductPage = () => {
  const router = useRouter();
  const { sku } = router.query;
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isChartOpen, setIsChartOpen] = useState(false);
  function closeBuy() {
    setIsBuyOpen(false);
  }

  function openBuy() {
    setIsBuyOpen(true);
  }
  function closeChart() {
    setIsChartOpen(false);
  }

  function openChart() {
    setIsChartOpen(true);
  }
  const [product, setProduct] = useState({
    name: "",
    media: [],
    sku: "",
    options: [],
    formattedPrice: "",
  });
  useEffect(() => {
    ProductsAPI.getDetailsItemAPI(sku).then((res) => {
      if (res && sku) {
        setProduct(res.detail.data.catalog.product);
      }
    });
  }, [sku]);

  return (
    <Main meta={<Meta title="test" description="Lorem ipsum" />}>
      <div>
        <div className="my-10 ml-[25%] flex text-sm">
          <Link
            href="/"
            className="hover:none mr-1 border-none text-primary-main1"
          >
            Home
          </Link>
          <Link
            href="/shop-collection/"
            className="hover:none mr-1 border-none text-primary-main1"
          >
            / Shop Collection
          </Link>
          /<p className="ml-1 text-primary-main4">{product.name}</p>
        </div>
        <div className="flex">
          <img
            src={
              product && product.media && product.media.length
                ? product.media[0].fullUrl
                : ""
            }
            width={500}
            height={500}
            className="ml-[25%]"
          ></img>
          <div className="flex flex-col">
            <div className="text-2xl font-light">{product.name}</div>
            <div className="mb-5">SKU: {product.sku}</div>
            <div className="mb-5">{product.formattedPrice}</div>
            {product &&
              product.options &&
              product.options.map((option) => (
                <div key={option.id}>
                  <div className="mb-5">
                    {option.optionType === "COLOR" ? (
                      <Color option={option} />
                    ) : (
                      <Size option={option} />
                    )}
                  </div>
                </div>
              ))}
            <div className="mb-2">
              <p>Quantity</p>
              <input
                type="number"
                className="w-[80px] h-[40px] border-[1px] border-primary-main1 pl-2"
                min={1}
                // value={2}
              />
            </div>
            <div>
              <div className="flex mb-3">
                <button
                  onClick={openChart}
                  className="w-[300px] bg-primary-main1 text-primary-main2 mr-2 hover:opacity-70"
                >
                  Add to Cart
                  <Chart isOpen={isChartOpen} closeModal={closeChart} />
                </button>
                <button className="border-[1px] border-primary-main3 p-[10px]">
                  <Heart size={20} color="#D2461C" />
                </button>
              </div>
              <button
                onClick={openBuy}
                className="w-full bg-primary-main3 py-[10px] text-primary-main2 hover:opacity-70"
              >
                <Buy isOpen={isBuyOpen} closeModal={closeBuy} />
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
export default ProductPage;
