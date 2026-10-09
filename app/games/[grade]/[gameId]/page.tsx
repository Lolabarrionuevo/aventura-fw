'use client'

import { use } from 'react'
import Link from 'next/link'
import { getActivityForGrade } from '@/lib/adventure/data'
import { GamePlayer } from '@/components/games/game-player'
import { useSession } from '@/components/session-provider'

const implementedTypes = new Set([
  'multiple-choice',
  'true-false',
  'complete-word',
  'match-concepts',
  'order-elements',
  'image-question',
  'memory',
  'timed-quiz',
])

export default function GamePage({
  params,
}: {
  params: Promise<{ grade: string; gameId: string }>
}) {
  const { grade, gameId } = use(params)
  const { student } = useSession()
  const activity = getActivityForGrade(gameId, grade as typeof student.grade)

  if (!activity || !implementedTypes.has(activity.type)) {
    return (
      <main className="grid min-h-screen place-items-center bg-background p-6 text-center">
        <div>
          <p className="text-5xl" aria-hidden="true">🔒</p>
          <h1 className="mt-4 font-display text-2xl font-extrabold">Coming soon</h1>
          <Link href="/materias" className="mt-4 inline-block font-bold text-primary">
            Volver a actividades
          </Link>
        </div>
      </main>
    )
  }

  return <GamePlayer activity={activity} />
}
