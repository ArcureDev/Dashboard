import {createRootRoute, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Navbar from "../components/navbar/navbar.tsx";
import Layout from "../components/layout/layout.tsx";
import Theme from "../components/theme.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar/>
            <Layout>
                <Theme>
                    <Outlet />
                </Theme>
            </Layout>
            <TanStackRouterDevtools />
        </>
    ),
})