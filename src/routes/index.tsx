import { createFileRoute, Link } from "@tanstack/react-router";
import { getProducts } from "@/utils/products";

export const Route = createFileRoute("/")({
    component: App,
    loader: () => getProducts(),
});

function App() {
    const { products } = Route.useLoaderData();

    return (
        <div>
            <div>
                <h1>ProShop</h1>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.$id}
                        className="border-1 border-gray-300 rounded-md p-4"
                    >
                        <img
                            className="w-full object-contain"
                            src={product.featured_image}
                            alt={product.name}
                        />
                        <Link to={`/product/${product.$id}`}>
                            <h2>{product.name}</h2>
                        </Link>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
