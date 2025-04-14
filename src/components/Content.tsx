import Image from 'next/image';

interface ContentProps {
    children: React.ReactNode;
    className?: string;
  }
  
  const Content = ({ children, className = "" }: ContentProps) => {
    return (
        <div className="bg-#D84747 min-h-screen border-4 border-red-900 flex justify-center items-center">
          
        {children}
      </div>
    );
  };

export default Content;
