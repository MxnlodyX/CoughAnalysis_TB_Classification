type ContainerProps = {
    children: React.ReactNode,
    className? : string,
}
export function Container(props: ContainerProps) {
    return (
        <main className="min-h-screen bg-gray-50 flex justify-center">
            <div className={`w-full max-w-md bg-white min-h-screen shadow-xl  ${props.className || ''}`}>
                {props.children}
            </div>
        </main>
    );
};