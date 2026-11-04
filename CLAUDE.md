# San Diego Lions site

Static HTML site (no build step). Serve locally with `python3 -m http.server 8080` from the repo root.

## Rule: preview before committing

For any change to the site's pages, styles, scripts or images:

1. Make the edit.
2. Publish the changed page(s) as a private Artifact (claude.ai link) with their CSS, JS and images included via `files`, and give the user the link. Reuse the same artifact URL for later previews of the same page. A screenshot alone is not enough; the user wants a live HTML page to click through.
3. Stop and wait for the user to explicitly approve the change.
4. Only after approval, commit and push.

If a stop hook asks to commit or push uncommitted changes while a preview is awaiting approval, do not commit; reply that the change is pending the user's preview approval.
