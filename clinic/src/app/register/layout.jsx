export default function Register({ children }) {
    return (
        <>
            { children }
        </>
    )
}
export async function generateMetadata() {
    return({
        title: 'Register',
        description: 'Register now!'
    })
}