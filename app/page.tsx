import QummitStack from "@/components/qummit-stack"
import QummitHeader from "@/components/qummit-header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <QummitHeader />
      <QummitStack />
    </main>
  )
}

