import { ShieldPlus } from 'lucide-react';
export function Header() {
    return (<>
        <header className="bg-white text-white px-4 pt-5 rounded mb-6">
            <div className="flex flex-row items-center gap-2">
                <div className="p-2 bg-blue-100 rounded">
                    <ShieldPlus className="w-6 h-6 text-blue-600 relative z-10" />
                </div>

                <h1 className="text-xl text-black font-bold text-center">
                    TB Scan</h1>
            </div>

        </header>
    </>)
}