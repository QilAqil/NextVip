import { NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "sandal",
    price: 100000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baa3702e-8def-47bc-99f0-bec2f8baa56e/PHANTOM+GX+II+ACADEMY+FG%2FMG+EH.png",
  },
  {
    id: 2,
    title: "sandal jepit",
    price: 1000000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baa3702e-8def-47bc-99f0-bec2f8baa56e/PHANTOM+GX+II+ACADEMY+FG%2FMG+EH.png",
  },
  {
    id: 3,
    title: "Nike",
    price: 1000000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3df3821-e702-47f9-971a-95712c1bb88c/AIR+MAX+DN8+%28GS%29.png"
  },
  // {
  //   id: 4,
  //   title: "Nike",
  //   price: 1000000,
  //   image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3df3821-e702-47f9-971a-95712c1bb88c/AIR+MAX+DN8+%28GS%29.png"
  // },
];

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
