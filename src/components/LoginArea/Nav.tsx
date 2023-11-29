
interface NavProps {
    children: React.ReactNode
}

export default function Nav({ children }: NavProps) {
    return (
        <nav className="flex gap-4 mt-4 md:flex-row flex-col justify-between 
        font-bold uppercase text-center">
            {children}
        </nav>
    )
}
