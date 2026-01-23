import HomeImageSlider from "../components/homeImageSlider";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function WelcomePage(){
    return(
         <div className="w-full h-full">
            
            <HomeImageSlider />

            {/* <div className="w-full h-[300px] flex flex-row">
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-secondary">
                    <LiaCertificateSolid className="text-8xl" />
                    <span className="text-[24px] font-bold">100 % Authentic</span>
                    <p className="text-[16px] text-center">100% Authetic Products from Trusted Sellers</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-secondary">
                    <TbTruckDelivery className="text-8xl"/>
                    <span className="text-[24px] font-bold">Islandwide Delivery</span>
                    <p className="text-[16px] text-center">Quick and Secure delivery within 1-3 working days</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-secondary">
                    <RiSecurePaymentFill className="text-8xl" />
                    <span className="text-[24px] font-bold">Easy Payment Options</span>
                    <p className="text-[16px] text-center">Enjoy the convenience of getting what you want and paying for it over time with KokoPay</p>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-secondary">
                    <VscWorkspaceTrusted className="text-8xl" />
                    <span className="text-[24px] font-bold">Trusted Online Store</span>
                    <p className="text-[16px] text-center">Join our Thriving Community of 10,000+ customers since 2020</p>
                </div>
            </div> */}

            {/**/}
            <section className="bg-primary py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="group flex flex-col items-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl">
                        <div className="mb-6 p-4 rounded-full bg-white group-hover:bg-accent/10 transition-colors">
                            <LiaCertificateSolid className="text-6xl text-accent transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">100% Authentic</h3>
                        <p className="text-secondary/70 text-center text-sm leading-relaxed">
                            Premium products sourced directly from trusted global brands.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group flex flex-col items-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl">
                        <div className="mb-6 p-4 rounded-full bg-white group-hover:bg-accent/10 transition-colors">
                            <TbTruckDelivery className="text-6xl text-accent transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">Islandwide Delivery</h3>
                        <p className="text-secondary/70 text-center text-sm leading-relaxed">
                            Quick and secure delivery to your doorstep within 1-3 working days.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group flex flex-col items-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl">
                        <div className="mb-6 p-4 rounded-full bg-white group-hover:bg-accent/10 transition-colors">
                            <RiSecurePaymentFill className="text-6xl text-accent transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">Flexible Payments</h3>
                        <p className="text-secondary/70 text-center text-sm leading-relaxed">
                            Shop now and pay later with ease via KokoPay or secure card checkout.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group flex flex-col items-center p-8 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl">
                        <div className="mb-6 p-4 rounded-full bg-white group-hover:bg-accent/10 transition-colors">
                            <VscWorkspaceTrusted className="text-6xl text-accent transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">Trusted Online Store</h3>
                        <p className="text-secondary/70 text-center text-sm leading-relaxed">
                            Join our community of 10,000+ happy customers since 2020.
                        </p>
                    </div>

                </div>
            </section>


            
        </div>
    );
}