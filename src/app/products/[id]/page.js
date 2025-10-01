
const productDetails = async ({ params }) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data = await response.json();
  console.log(data);
  return (
    <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Product Details - ID: {params.id}</h1>
       { data && (
        <div className="p-4 border border-gray-300 rounded shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">{data.title}</h2>
            <p>{data.body}</p>
        </div>
       )}
    </div>
  );
}
export default productDetails;