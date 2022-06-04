import Header from "./Header";

function Layout(props: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}

export default Layout;
