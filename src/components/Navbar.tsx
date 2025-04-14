import "./Navbar.css"
import Image from "next/image"
import { useRouter } from "next/navigation";

interface NavbarProps {
    currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
    const router = useRouter();

    return (
        <nav className="navbar">
                <Image
                className="tenderLogo"
                src="/logo.png"
                alt="Tender Logo"
                width={200}
                height={0}
                />
            

            {['/settings', '/auth', '/gallery'].includes(currentPath) && (
            <div className="buttons">
                <button 
                className="viewButton"
                onClick={() => {
                    router.push('/');
                }}
                >
                Logout
                </button>
                <button onClick={() => router.push('/auth')}>
                    <img
                        className="homeIcon"
                        src='/home.png'
                    />
                </button>
                <button onClick={() => router.push('/gallery')}>
                    <img
                        className="galleryIcon"
                        src='/gallery.png'
                    />
                </button>
                <button onClick={() => router.push('/settings')}>
                    <img
                        className="settingsIcon"
                        src='/settings.png'
                    />
                </button>
            </div>
            )}

        </nav>
    );
}

export default Navbar;