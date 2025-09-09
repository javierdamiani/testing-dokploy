import Message from "@/components/Message";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold">Mini App</h1>
      <p className="text-sm text-gray-500">Este frontend hace un fetch simple al backend.</p>
      <section className="mt-2">
        <h2 className="text-lg font-medium mb-2">Mensaje del backend</h2>
        <Message />
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-medium mb-2">Dummy info</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Versión: 1.0.0</li>
          <li>Estado: ok</li>
        </ul>
      </section>
    </main>
  );
}
