export default function Login({children}) {
    return (
        <>
            { children }
        </>
    )
} 
export async function generateMetadata() {
    return({
        title: 'Login',
        description: 'Login now!'
    })
}