export default function Header() {
  return (
    <div className="bg-original-purple w-full py-8">
      <div className="w-full max-w-6xl mx-auto text-white flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#">Author</a>
          <a href="#">Advertisment</a>
          <a href="#">Member</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex space-x-2.5 items-center after:content-[''] after:w-0.5 after:h-full after:bg-blue-300 relative after:absolute after:top-0 after:-right-2">
            <i className="fas fa-clock mx-1"></i>
            {new Date().toLocaleDateString()}
          </div>
          <div className="flex space-x-1.5">
            <div className="p-1.5 bg-blue-500 rounded-full flex justify-center items-center">
              <i className="fab fa-facebook w-fit text-xl h-fit"></i>
            </div>
            <div className="p-1.5 bg-light-blue rounded-full flex justify-center items-center">
              <i className="fab fa-twitter w-fit text-xl h-fit"></i>
            </div>
            <div className="p-1.5 bg-red-500 rounded-full flex justify-center items-center">
              <i className="fab fa-youtube w-fit text-xl h-fit"></i>
            </div>
            <div className="p-1.5 bg-purple-600 rounded-full flex justify-center items-center">
              <i className="fab fa-instagram w-fit text-xl h-fit"></i>
            </div>
            <div className="p-1.5 bg-orange-500 rounded-full flex justify-center items-center">
              <i className="fab fa-google-plus w-fit text-xl h-fit"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
