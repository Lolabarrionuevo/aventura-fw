'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Question } from '@/lib/adventure/types'

export function ChoiceQuestion({
  question,
  selected,
  answered,
  onSelect,
}: {
  question: Question
  selected: number | null
  answered: boolean
  onSelect: (index: number) => void
}) {
  const optionOrder = useMemo(() => {
    const order = (question.options ?? []).map((_, index) => index)
    for (let index = order.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1))
      ;[order[index], order[swapIndex]] = [order[swapIndex], order[index]]
    }
    return order
  }, [question.id])

  function speakClue() {
    if (question.audioText && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(question.audioText))
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {(question.image || question.emoji) && (
        <div className="mx-auto grid size-40 place-items-center overflow-hidden rounded-3xl bg-muted">
          {question.image ? (
            <Image
              src={question.image}
              alt="Imagen de la pregunta"
              width={160}
              height={160}
              className="size-full object-contain p-2"
            />
          ) : <span className="text-7xl" aria-hidden="true">{question.emoji}</span>}
        </div>
      )}
      {question.audioText && (
        <button type="button" onClick={speakClue} className="mx-auto rounded-full border border-border px-4 py-2 font-bold">
          Listen to the clue
        </button>
      )}
      <h2 className="text-balance text-center font-display text-2xl font-extrabold text-foreground">
        {question.prompt}
      </h2>
      {question.hint && !answered && (
        <p className="text-center text-sm text-muted-foreground">💡 {question.hint}</p>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {optionOrder.map((originalIndex) => {
          const option = question.options?.[originalIndex] ?? ''
          const isCorrect = originalIndex === question.answerIndex
          const isSelected = originalIndex === selected
          return (
            <button
              key={`${originalIndex}-${option}`}
              type="button"
              disabled={answered}
              onClick={() => onSelect(originalIndex)}
              className={cn(
                'flex items-center justify-between gap-2 rounded-2xl border-2 px-5 py-4 text-left text-lg font-bold transition-all',
                !answered &&
                  'border-border bg-card text-card-foreground hover:-translate-y-0.5 hover:border-primary/50',
                answered && isCorrect && 'border-success bg-success/10 text-foreground',
                answered && isSelected && !isCorrect && 'border-destructive bg-destructive/10 text-foreground',
                answered && !isCorrect && !isSelected && 'border-border bg-card opacity-60',
              )}
            >
              {option}
              {answered && isCorrect && <Check className="size-5 shrink-0 text-success" />}
              {answered && isSelected && !isCorrect && (
                <X className="size-5 shrink-0 text-destructive" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
