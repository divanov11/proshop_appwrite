import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
    component: RouteComponent,
    loader: () => {
        console.log("This is being run here///");
    },
});

function RouteComponent() {
    return <div>Hello "/profile"!</div>;
}
