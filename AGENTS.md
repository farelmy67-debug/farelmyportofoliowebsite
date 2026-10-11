<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio CV and organisation media in CDN asset pointers loaded by the index route; the legacy portfolio script consumes their JSON without embedding media binaries.
- Configure external project destinations in ROLE_PROJECTS using url and linkType; missing destinations must remain visibly unavailable rather than use invented links.
