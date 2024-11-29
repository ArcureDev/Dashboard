import {createLazyFileRoute} from '@tanstack/react-router'
import Theme from "../components/theme.tsx";
import Navbar from "../components/navbar/navbar.tsx";
import Layout from "../components/layout/layout.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <>
        </>
    )
}