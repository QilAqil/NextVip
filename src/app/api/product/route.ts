import { NextResponse } from "next/server";
import DetailProductPage from "./../../product/[[...slug]]/page";
const data = [
  {
    id: 1,
    name: "sandal",
    price: 100000,
  },
  {
    id: 2,
    name: "sandal jepit",
    price: 1000000,
  },
];

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if(detailProduct) {
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
