import Header from "./Header";

function Layout(props: { children: React.ReactNode }) {
    return (
        <main className=" overflow-x-scroll">
            <Header />
            {props.children}
        </main>
    );
}

export default Layout;
