import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link legacyBehavior href="/"><a>Home</a></Link>
      <Link legacyBehavior href="/about-us"><a>About Us</a></Link>
      <Link legacyBehavior href="/products"><a>Products</a></Link>
      <Link legacyBehavior href="/teams"><a>Teams</a></Link>
    </nav>
  );
};