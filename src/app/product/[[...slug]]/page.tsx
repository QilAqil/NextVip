type ProductPageProps = {
  params: {
    slug: string[];
  };
};
async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products"); // menggambil data dari https://fakestoreapi
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "force-cache",// untuk fatching atau frezz
    next: {
      tags: ["products"]
      // revalidate: 30 // update setiap 30 detik
    }
  }); // menggambil data dari lokal

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const products = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-4 pleace-items-center ">
      {/* <h1>{slug ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.title}
                </h5>
              </a>
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      {slug && (
        <>
          <p>Category: {slug[0]}</p>
          <p>Product: {slug[1]}</p>
          <p>Id: {slug[2]}</p>
        </>
      )}
    </div>
  );
}
