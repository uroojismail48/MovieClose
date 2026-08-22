function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/20 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">Cine</span>Flex
          </h1>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Your go-to spot for movies, shows, and everything in between.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h2 className="font-semibold mb-3">Explore</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/newMovies" className="hover:text-white">New Movies</a></li>
              <li><a href="/By-Country" className="hover:text-white">By Country</a></li>
              <li><a href="/Series" className="hover:text-white">Series</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Company</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} CineFlex. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;