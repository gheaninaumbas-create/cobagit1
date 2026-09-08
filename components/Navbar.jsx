import { useState } from "react";

function Navbar() {
    const [title, setTitle] = useState("Kelas Front-End B ");

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-blue-600">{title}</h1>
                   <div className="flex gap-6">
                    <a 
                        onClickCapture={() =>{
                            if (tittle === "Kelas Front-End B") {
                                setTitle("kelas Front-End B");
                            }else {
                                setTitle("Kelas Front-End B");
                            } 
                        }}
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setTitle("Kelas Front-End B");
                        }} 
                        className="text-gray-600 hover:text-blue-600"
                    >
                        Home
                    </a>
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setTitle("Kelas Front-End B");
                        }} 
                        className="text-gray-600 hover:text-blue-600"
                    >
                        Features
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                        About me
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;