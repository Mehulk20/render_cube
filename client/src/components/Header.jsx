function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 text-white">
      <div className="text-2xl font-bold">○</div>
      <nav className="flex gap-6">
        <a href="#">Browse</a>
        <a href="#">Sell</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button className="bg-white text-black px-4 py-2 rounded-md">Log In</button>
      </nav>
    </header>
  );
}

export default Header;
