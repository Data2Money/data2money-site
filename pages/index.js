import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#FFD700',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '40px'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #333',
        paddingBottom: '10px',
        marginBottom: '40px'
      }}>
        <h1 style={{ fontSize: '2rem' }}>data2money</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/">Home</Link>
          <Link href="/strategy">Strategy</Link>
          <Link href="/macro">Macro</Link>
          <Link href="/policy">Policy</Link>
        </div>
      </nav>
      <section>
        <h2 style={{ fontSize: '1.5rem' }}>AI-Powered Macro Dashboard (Coming Soon)</h2>
        <Image src="/chart-placeholder.png" width={800} height={400} alt="Macro Chart Placeholder" />
        <p style={{ marginTop: '20px' }}>Stay tuned for real-time global economic indicators and charts.</p>
      </section>
    </div>
  );
}
