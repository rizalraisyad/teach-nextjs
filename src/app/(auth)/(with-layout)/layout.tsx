export default function MenuLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <h2>Header</h2>
        <h2>Navbar</h2>
        <div>
        {children}
        </div>
        <h2>Footer</h2>
        </>
    )
  }
  