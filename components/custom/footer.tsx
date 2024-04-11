export const Footer = () => {
    return (
        <footer className="h-20 w-full border-t-2 border-slate-200 p-2 mt-auto">
        <div className="flex items-center justify-evenly h-full">
            <span>&copy; {new Date().getFullYear()} Pikavec</span>
        </div>
      </footer>
    );
    }