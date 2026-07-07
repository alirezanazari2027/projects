export default function Header() {
  return (
    <div className="bg-original-purple w-full py-10">
      <div className="w-full max-w-6xl mx-auto text-white flex justify-between">
        <div className="flex space-x-4">
          <a href="#">Author</a>
          <a href="#">Advertisment</a>
          <a href="#">Member</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center">
            {new Date().getDate()}
          </div>
        </div>
      </div>
    </div>
  );
}
