export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent text-white px-[40px]">
            <div className="h-full w-full flex relative">
                <img src="/CBC_logo.png" className="h-full absolute w-[170px] left-0 object-cover"/>
                <div className="h-full flex justify-center items-center w-full text-lg gap-[20px]">
                    <a href="/">Home</a>
                    <a href="/products">Products</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </header>
    )
}