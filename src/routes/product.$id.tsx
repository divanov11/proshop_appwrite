import { createFileRoute, Link } from "@tanstack/react-router";
// import { getProduct } from "@/utils/products";

export const Route = createFileRoute("/product/$id")({
    component: RouteComponent,
    // loader: ({ params }) => getProduct(params.id),
});

function RouteComponent() {
    // const { id } = Route.useParams();
    // const product = Route.useLoaderData();
    return (
        <div>
            {/* <p>
                Go <Link to="/">back</Link>
            </p>
            <img src={product.featured_image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p> */}
        </div>
    );
}
