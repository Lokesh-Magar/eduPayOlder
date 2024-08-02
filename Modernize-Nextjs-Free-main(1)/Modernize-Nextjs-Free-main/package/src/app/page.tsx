import Link from "next/link";

const IndexView=({params}:{params:{params:{children:React.ReactNode}}})=>{

    return (
        <div className="bg-black">
        <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-bold">EduFee</a>
            <div className="space-x-4">
                <Link href="#home" className="text-white">Home</Link>
                <Link href="/login" className="text-white">Login</Link>
                <Link href="#pricing" className="text-white">Pricing</Link>
                <Link href="#contact" className="text-white">Contact</Link>
            </div>
        </div>
    </nav>
    </div>

    );


}
export default IndexView;