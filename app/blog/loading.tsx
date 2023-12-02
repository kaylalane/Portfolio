import "../../styles/blogs.scss";

export default function Loading() {
  return (
    <div className="">
      <h1 className=" title">Another Dev Who Writes</h1>
      <div className="blogs-container">
        {new Array(5).fill(1).map((post) => (
          <div key={post.url} className="flex flex-col w-screen">
            <div className=" h-7 w-2/3 mb-4 bg-darkbg rounded"></div>
            <div className=" h-5 w-20 mb-2 bg-darkbg rounded"></div>
            <div className=" h-5 w-20 mb-2 bg-darkbg rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
