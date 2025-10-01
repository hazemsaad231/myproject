import Link from "next/link";

const products = async()=>{

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  return <div className="p-8">
    <h1 className="text-4xl font-bold mb-4">Products Page</h1>
    {data.map((item)=>(
<Link href={`work-news/${item.id}`} key={item.id}>
      <div key={item.id} className="my-4 p-4  border border-gray-300 rounded shadow-sm hover:bg-green-700">
        <div className="text-xl font-bold mb-2">Product ID: {item.id}</div>
        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
        <p>{item.body}</p>
      </div>
      </Link>
    ))}
  </div>
}
export default products;