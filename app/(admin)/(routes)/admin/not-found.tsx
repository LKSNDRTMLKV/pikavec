import Link from "next/link";

import { Button } from "@/components/ui/button";
import adminRoutes from "@/routes/admin";

const NotFoundPage = () => {
    const { home } = adminRoutes;
    return (
        <div className="h-full flex flex-col pt-4 space-y-4 items-center justify-center text-muted-foreground">
            <h1 className="text-4xl">404</h1>
            <p>
                We couldn&apos;t find the page you were looking for.
            </p>
            <Button variant="secondary" asChild>
                <Link href={home}>
                    Go back home
                </Link>
            </Button>
        </div>
    );
};

export default NotFoundPage;