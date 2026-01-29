//my code
// import { Link } from "react-router-dom";


// export default function ProductCard(props) {
//     const product = props.product;
//     const savedPrice = product.labelledPrice - product.price;
//     return (
//         <div className="w-[220px] h-[400px] shadow-2xl m-3 flex flex-col p-[10px] bg-white rounded-[10px]">
//             <Link to={"/overview/" + product.productId}>
//                 <img className="w-full h-[225px] object-cover" src={product.images[0]}></img>
//             </Link>
//             <Link to={"/overview/" + product.productId}>
//                 <h1 className="text-[18px] font-semibold text-secondary mt-2">{product.name}</h1>
//             </Link>
//             <div className="mt-3">
//                 {
//                     product.labelledPrice > product.price ?
//                         <div className="flex flex-col">
//                             <p className="text-[] text-accent font-semibold">LKR {product.labelledPrice.toFixed(2)}</p>
//                             <p className="text-secondary font-semibold">Gems Save LKR {savedPrice.toFixed(2)}</p>
//                         </div> :
//                         <p className="text-lg text-accent font-semibold">LKR {product.price.toFixed(2)}</p>
//                 }
//             </div>



//         </div>

//     );
// }

import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { product } = props;
    const savedPrice = product.labelledPrice - product.price;

    return (
        <div className="group w-[230px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden m-3 flex flex-col">
            <Link to={"/overview/" + product.productId} className="relative overflow-hidden">
                <img
                    className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                    src={product.images[0]}
                    alt={product.name}
                />
                {
                    product.labelledPrice > product.price &&
                    (
                        <div className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Save LKR {savedPrice.toFixed(0)}
                        </div>
                    )}
            </Link>

            <div className="p-4 flex flex-col flex-grow">
                <Link to={"/overview/" + product.productId}>
                    <h1 className="text-md font-bold text-secondary line-clamp-2 hover:text-accent transition-colors min-h-[3rem]">
                        {product.name}
                    </h1>
                </Link>

                <div className="mt-auto pt-3 border-t border-slate-50">
                    {
                        product.labelledPrice > product.price ? (
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-400 line-through">
                                    LKR {product.labelledPrice.toFixed(2)}
                                </span>
                                <span className="text-lg font-bold text-accent">
                                    LKR {product.price.toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <p className="text-lg font-bold text-accent">
                                LKR {product.price.toFixed(2)}
                            </p>
                        )}
                </div>
            </div>
        </div>
    );
}