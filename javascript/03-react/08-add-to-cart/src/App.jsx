import { useEffect, useState } from "react";
import Product from "./assets/Components/Product";


const App = () => {
  const [productValue, setProductValue] = useState([]);

  const [total, setTotal] = useState(0);

  //* UseEffect is working, but It doesn't re-rendering.
  // useEffect(() => {
  //   const sum = productValue.reduce((acc, current) => {
  //     return acc + current;
  //   }, 0);
  //   setTotal(sum);
  // }, [productValue, setProductValue]);

  const handleTotal = (data, index) => {
    const currentValue = productValue;
    currentValue[index] = data;
    //* Adding the index to the values. [index:value]
    setProductValue(currentValue);

    const sum = productValue.reduce((acc, current) => {
      return acc + current;
    }, 0);
    setTotal(sum);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="px-5 py-4 flex flex-col gap-x-2">
        <div>
            
          <Product
            imageURL={
              "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/307565/maybelline-new-york-lash-sensational-sky-high-waterproof-mascara-lengthening-and-volumizing-mascara-with-bamboo-exract-and-fibres-very-black-6-ml_1_display_1703162261_14d38e50.jpg"
            }
            productTitle={"Maybelline New York - Very Black"}
            productDesc={"Lash Sensational Sky High Waterproof Mascara - Very Black."}
            price={675}
            setProductValue={handleTotal}
            index={0}
          />
          <Product
            imageURL={
              "https://5.imimg.com/data5/RS/HF/MY-59175589/huda-liquid-matte-lipstick.jpg"
            }
            productTitle={"Huda Liquid Matte Lipstick"}
            productDesc={
              `Huda Beauty Matte Liquid Lipstick - Trendsetter
              (4.2ml)`
            }
            price={1200}
            setProductValue={handleTotal}
            index={1}
          />
          <Product
            imageURL={
              "https://media6.ppl-media.com//tr:h-750,w-750,c-at_max,dpr-2/static/img/product/354095/m-a-c-in-extreme-dimension-24hr-kajal-eye-liner_4_display_1622459701_bf610630.jpg"
            }
            productTitle={"M.A.C In | Kajal Eye Liner"}
            productDesc={
              "M.A.C In Extreme Dimension 24Hr Kajal Eye Liner."
            }
            price={870}
            setProductValue={handleTotal}
            index={2}
          />
        </div>
        <div className="bg-pink-700 text-white px-5 py-2 w-full flex gap-x-2 h-fit justify-end items-end rounded">
          <h2 className="text-xl font-bold tracking-wide">Total Checkout</h2>
          <span className="text-xl font-medium">${total}.00</span>
        </div>
      </div>
    </div>
  );
};

export default App;