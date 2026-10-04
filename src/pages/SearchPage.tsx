import { useMemo, type FormEvent, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Breadcrumb } from '@/components/common/Breadcrumb'
import { getSearchIndex, type SearchEntry } from '@/content/searchIndex'

const MIN_QUERY_LENGTH = 2
const SNIPPET_LENGTH = 200

// Must keep string length unchanged so match offsets map back onto the original text.
function normalize(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е')
}

interface SearchResult {
  entry: SearchEntry
  snippet: string
}

function makeSnippet(text: string, normalizedText: string, words: string[]): string {
  const hits = words.map((word) => normalizedText.indexOf(word)).filter((pos) => pos >= 0)
  if (hits.length === 0) return text.slice(0, SNIPPET_LENGTH) + (text.length > SNIPPET_LENGTH ? '…' : '')

  const start = Math.max(0, Math.min(...hits) - SNIPPET_LENGTH / 4)
  const end = Math.min(text.length, start + SNIPPET_LENGTH)
  return (start > 0 ? '…' : '') + text.slice(start, end).trim() + (end < text.length ? '…' : '')
}

function searchSite(words: string[]): SearchResult[] {
  const titleMatches: SearchResult[] = []
  const textMatches: SearchResult[] = []

  for (const entry of getSearchIndex()) {
    const title = normalize(entry.title)
    const text = normalize(entry.text)
    if (!words.every((word) => title.includes(word) || text.includes(word))) continue

    const result = { entry, snippet: makeSnippet(entry.text, text, words) }
    if (words.some((word) => title.includes(word))) titleMatches.push(result)
    else textMatches.push(result)
  }

  return [...titleMatches, ...textMatches]
}

function highlight(value: string, words: string[]): ReactNode[] {
  const normalized = normalize(value)
  const marked = new Array<boolean>(value.length).fill(false)
  for (const word of words) {
    for (let pos = normalized.indexOf(word); pos >= 0; pos = normalized.indexOf(word, pos + word.length)) {
      marked.fill(true, pos, pos + word.length)
    }
  }

  const nodes: ReactNode[] = []
  let start = 0
  for (let i = 1; i <= value.length; i++) {
    if (i === value.length || marked[i] !== marked[start]) {
      const part = value.slice(start, i)
      nodes.push(
        marked[start] ? (
          <mark key={start} className="rounded-sm bg-brand-gold/30 text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )
      start = i
    }
  }
  return nodes
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const trimmed = query.trim()
  const words = useMemo(() => normalize(trimmed).split(/\s+/).filter(Boolean), [trimmed])
  const results = useMemo(
    () => (trimmed.length >= MIN_QUERY_LENGTH ? searchSite(words) : []),
    [trimmed, words],
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = (event.currentTarget.elements.namedItem('q') as HTMLInputElement).value
    setSearchParams(value.trim() ? { q: value.trim() } : {})
  }

  return (
    <div>
      <Breadcrumb label="Поиск" />

      <div className="mx-auto max-w-site px-6 py-6">
        <h1 className="mb-8 text-3xl font-bold text-brand-teal">Поиск</h1>

        <form key={query} onSubmit={handleSubmit} role="search" className="mb-8 flex max-w-2xl gap-3">
          <input
            name="q"
            type="search"
            defaultValue={query}
            aria-label="Поисковый запрос"
            className="min-w-0 flex-1 rounded border border-slate-300 px-3 py-2 focus:border-brand-teal focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-brand-teal px-6 py-2 font-semibold text-white transition-colors hover:bg-brand-teal-dark"
          >
            Найти
          </button>
        </form>

        {trimmed && trimmed.length < MIN_QUERY_LENGTH && (
          <p className="text-slate-600">Введите минимум {MIN_QUERY_LENGTH} символа.</p>
        )}

        {trimmed.length >= MIN_QUERY_LENGTH &&
          (results.length === 0 ? (
            <p className="text-slate-600">Ничего не найдено</p>
          ) : (
            <>
              <p className="mb-6 text-sm text-slate-500">Найдено результатов: {results.length}</p>
              <ol className="space-y-6">
                {results.map(({ entry, snippet }) => (
                  <li key={entry.href}>
                    <Link to={entry.href} className="text-lg font-semibold text-brand-teal hover:underline">
                      {highlight(entry.title, words)}
                    </Link>
                    <p className="mt-1 text-sm text-slate-600">{highlight(snippet, words)}</p>
                  </li>
                ))}
              </ol>
            </>
          ))}
      </div>
    </div>
  )
}
