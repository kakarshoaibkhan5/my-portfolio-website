"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

const code = `import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1 -> Load a CERN Open Data release
df = pd.read_parquet("cern_higgs_10k.parquet")

# 2 -> Engineer physics-aware features
FEATURES = ["pt", "eta", "phi", "missing_et", "jet_mass"]
X, y = df[FEATURES], df["is_higgs"]

# 3 -> Train the classifier
model = RandomForestClassifier(
    n_estimators=300,
    max_depth=12,
    class_weight="balanced",
    random_state=42,
)
model.fit(X_train, y_train)

# 4 -> Predict and evaluate
score = model.predict_proba(X_test)[:, 1]
print(f"Accuracy: {accuracy_score(y_test, score > 0.5):.2%}")`

const TOKEN_REGEX =
  /(#.*$|"[^"]*"|\b(?:import|from|as|print|True|False|None|class|def|return)\b|\b\d+(?:\.\d+)?\b)/g

function highlight(line: string) {
  const parts = line.split(TOKEN_REGEX)

  return parts.map((part, index) => {
    if (!part) return null

    let className = "text-slate-300"
    if (part.startsWith("#")) className = "text-slate-500 italic"
    else if (part.startsWith('"')) className = "text-emerald-300"
    else if (/^\d/.test(part)) className = "text-amber-300"
    else if (
      /^(import|from|as|print|True|False|None|class|def|return)$/.test(part)
    )
      className = "text-violet-300"

    return (
      <span key={`${index}-${part}`} className={className}>
        {part}
      </span>
    )
  })
}

export function PythonSnippet() {
  const [copied, setCopied] = useState(false)
  const lines = code.split("\n")

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080D1D]/90 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Terminal className="h-3.5 w-3.5 text-sky-400" />
          <span className="font-mono">higgs_classifier.py</span>
          <span className="hidden rounded-full border border-white/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-slate-500 sm:inline">
            Python 3.11
          </span>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition-colors hover:border-sky-400/40 hover:text-white"
          aria-label="Copy Python snippet"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto px-4 py-4">
        <pre className="min-w-[420px] font-mono text-[11.5px] leading-[1.75] sm:text-xs">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex gap-4">
                <span className="w-5 select-none text-right text-slate-600">
                  {index + 1}
                </span>
                <span className="whitespace-pre">{highlight(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-[10px] text-slate-500">
        <span>Random Forest · 300 estimators</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400/80">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Pipeline reproducible
        </span>
      </div>
    </div>
  )
}
