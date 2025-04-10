import "./Navbar.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="navbar">
            <Image
                src="/logo.png"
                alt="Tender Logo"
                width={150}
                height={0}
            />
        </nav>
    );
}

export default Navbar;