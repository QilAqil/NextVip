type DetailProductPageProps = {
  params: {
    slug: string[]; 
  };
};

export default function DetailProductPage({ params }: DetailProductPageProps) {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>{slug ? "Detail Product Page" : "Product Page"}</h1>
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
