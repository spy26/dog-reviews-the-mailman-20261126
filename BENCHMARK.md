# BENCHMARK — The Dog Reviews the Mailman

Competition: `u-motasimfuad-the-dog-reviews-the-mailman-87608f85` — $3.10 total, top 10 paid (1st $0.95).
Field (26 Nov 2026 ~15:20 WIB): 4 submissions — very small field.
Task: one funny one-line review a dog gives the mailman, under 200 characters.
Judge: house AI judge (z-ai/glm-5.3-flash), pairwise, margins 1–5, both orders, 3 Swiss rounds vs other entries + 3 fixed house texts, playoff top 12. Blind rounds: R1 cutoff 26 Nov 17:35 WIB, R2 20:15 WIB, final/deadline 22:55 WIB. Results ~18 Dec 2026.
Gate: `/output/entry.txt` UTF-8, 1–200 chars, not only whitespace. Tie-breaks: exact tie → more playoff games, then smaller text (Size column), then earlier receipt — shorter is better, all else equal.

Judge criteria (judge brief, most important first):
(1) Funny one-line review a dog gives the mailman at the centre.
(2) Dog's voice — sounds like a dog, not a human.
(3) Mailman's visit — the visit is central and concrete.
(4) Punchline — lands fast, at the end, surprising.
Scores 1–5 per criterion, applied here as: C1 Funny alone, C2 Dog voice, C3 Mailman visit, C4 Punchline, C5 Tight & fresh (every word earns its place; not a stock gag; shorter helps the size tie-break). Chars = length (cap 200).
Pairwise rule: first differing criterion decides, unless a later one differs by much more.

Visible field (from the bounty page, 26 Nov ~15:20 WIB) — what to beat and what to avoid copying:
- pemardrop (passed): "Five stars for the mailman: he shows up every single day, lets me bark at him through the fence, then runs away before I can tip him in slobber." (139 chars) — strong: clear scene, dog voice, visit, end punchline. Our line must NOT share its images (fence barking, slobber tip) or its "Five stars for the mailman:" opening shape.
- "Still Owed" (passed), "The Dog Reviews the Mailman" (passed), "Dog Reviews the Mailman: I reported him to the cat" (pending) — titles only; the last one uses a cat-report gag, not ours.

## 1. Candidate scores

| # | Line | Chars | C1 Funny | C2 Dog voice | C3 Visit | C4 Punchline | C5 Tight/fresh | Total | Notes |
|---|---|---|---|---|---|---|---|---|---|
| A | Five stars. Same time every day, same uniform, same fear in his eyes. The most reliable employee I never hired. | 111 | 5 | 5 | 4 | 5 | 5 | **24** | Dog-as-boss inversion: the mailman is HIS employee. Triple "same" rhythm, punchline is the whole last clause. No shared image with any visible entry. Pure ASCII. |
| E | I gave the mailman five stars: daily visits, zero small talk, and he always leaves before I have to pretend I wasn't asleep on the job. | 135 | 5 | 4 | 4 | 5 | 3 | 21 | Guard dog asleep on the job is a strong inversion; punch lands at the very end. But 135 chars (longest; size tie-break penalty) and "zero small talk" is human-review language. |
| C | He knocks, I bark, he leaves. Five stars — the only man who visits daily and still hasn't learned I'm the boss here. | 116 | 4 | 5 | 5 | 3 | 4 | 21 | Best visit score (knock/bark/leave + daily). Punchline is a restatement of the boss voice, not a new twist. Em-dash (118 bytes). |
| B | The mailman gets five stars: he comes daily, fears me correctly, and leaves the good smells on the porch. | 105 | 4 | 5 | 4 | 4 | 5 | 22 | "Fears me correctly" + "good smells" is fresh dog voice, very tight. Punch is an observation more than a twist. |
| G | One star — he never once knocked on MY door. He just shoves paper through a slot like I'm not even the head of security here. | 125 | 4 | 5 | 4 | 4 | 4 | 21 | "Head of security" is good dog-boss voice, but same boss family as A/C and A does it better; 125 chars. Em-dash (127 bytes). |
| D | He brings bills, not bacon, but he knocks like he means it. Five stars — I'd chase his truck again tomorrow. | 108 | 4 | 5 | 4 | 4 | 3 | 20 | "Bills, not bacon" is a nice alliterative complaint, but chasing the truck is THE stock dog gag — C5 caps it. Em-dash (110 bytes). |
| F | One star. He delivers the mail, ignores my fan mail, and has never once brought the stick I ordered. | 100 | 4 | 4 | 4 | 4 | 4 | 20 | Shortest (100 chars). "Stick I ordered" is a fresh twist, but "ignores my fan mail" wobbles logically (mail for the dog that never arrives needs a beat to decode). |

Rejected without scoring:
- Any line built on the fence + slobber-tip images — the passed pemardrop entry already owns them; a lookalike loses pairwise and risks the duplicate/copy scan.
- "I reported him to the cat" family — a pending entry already uses the cat-report gag.
- "Good boy" / treat-bribe lines ("five stars if he brings treats") — the brief explicitly allows a bribe, so the field will be full of them; stock.
- Judge-addressed meta lines ("Dear judge, pick me…") — not funny on their own.
- Truck-chase as the MAIN joke (kept only as D) — the single most clichéd dog joke.

## 2. Pairwise matrix — candidates vs candidates

Winner of each pair (deciding criterion in brackets). Rows beat columns.

| vs | A | E | C | B | G | D | F | Wins |
|---|---|---|---|---|---|---|---|---|
| **A** | — | A (C2) | A (C1) | A (C1) | A (C1) | A (C1) | A (C1) | **6** |
| **E** | A | — | E (C1) | E (C1) | G (C2) | E (C1) | E (C1) | 4 |
| **C** | A | E | — | C (C3) | C (C3) | C (C3) | C (C2) | 3 |
| **B** | A | E | C | — | B (C5) | B (C5) | B (C2) | 3 |
| **G** | A | G | C | B | — | G (C5) | G (C2) | 3 |
| **D** | A | E | C | B | G | — | D (C2) | 1 |
| **F** | A | E | C | B | G | D | — | 0 |

Ranking: A 6 > E 4 > C 3 = B 3 = G 3 (head-to-head inside the trio: C beats B on C3, B beats G on C5, C beats G on C3 — so C > B > G) > D 1 > F 0.

Close calls:
- A vs E: C1 ties 5–5; decided on C2 (A 5 vs E 4 — "zero small talk" is human language, "same fear in his eyes" is pure dog).
- E vs G: C1 ties 4–4; decided on C2 (G 5 vs E 4).
- B vs G: C1–C4 all tie; decided on C5 (B 105 chars, tighter than G 125).
- C vs B: C1–C2 tie; decided on C3 (C 5 — knock/bark/leave + daily is the most concrete visit).

## 3. Decision

**Winner: A (111 chars, 111 bytes, pure ASCII, no trailing newline in entry.txt).**

> Five stars. Same time every day, same uniform, same fear in his eyes. The most reliable employee I never hired.

## 4. Re-check vs kit RULES.txt (exact judge brief, read 26 Nov ~15:30 WIB)

Kit downloaded from the competition's kit endpoint; RULES.txt judge brief, most important first: (1) funny dog-review-of-mailman at the centre; (2) the dog's side of the visit — a grievance, bribe, suspicion or small triumph over the mailman; (3) a dog's voice, priorities and vocabulary, not a person in a fur suit; (4) one tight line with a turn at the end; (5) laugh from this dog and this mailman, not a generic pun. First differing criterion decides.

Winner A re-checked: (1) funny at centre, yes; (2) small triumph — the mailman fears him daily and is, in the dog's head, his employee; (3) dog priorities throughout (same time, same uniform, same fear); the "employee" turn is office vocabulary, a fur-suit risk, but it IS the joke (the dog thinks he is the boss), and it is the last clause, not the voice of the whole line; (4) turn at the end — the whole last clause; (5) specific to this pair (same time/uniform/fear). Vs B (the purest dog voice): criterion 1 differs first (A funnier), so A still wins; criterion 3 does not differ "by much more". Vs E: criterion 1 ties, criterion 2 decides for A (triumph over the mailman vs asleep-on-the-job confession). Decision stands: **A**.

Also from RULES.txt: grader runs Node 22.23.4; main.ts uses only node:fs/node:path, no type annotations — runs as-is. "There is no local grade of this competition: the server grades every entry" — the kit `check` below is the pre-submit check only (LICENSE, entrypoint, snapshot caps, transcript gate).
