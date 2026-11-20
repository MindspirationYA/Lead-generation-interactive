# Mindspiration: Check-in + Adventskalender

One Netlify site, one lead list.

## Links

- Check-in quiz: `/` (or `/check-in`)
- Adventskalender: `/adventskalender/`
- Lead list for both: `/admin`

## Deploy

This replaces the quiz repo. Upload the contents of this folder to the same GitHub repo (index.html at the top level, the `adventskalender` folder next to it). Netlify redeploys on its own. The environment variables stay the same:

- `COACH_SLUG` = `mindspiration`
- `ADMIN_PIN` = her PIN
- `COACH_NAME` = `Mindspiration`

## Adventskalender signup

- Visitors enter first name and email to open the calendar. It's asked once per phone.
- Contact consent is a separate, unticked checkbox and is optional. To make it required, set `KONTAKT_PFLICHT = true` in `adventskalender/index.html`.
- Each signup is saved with the time, and when ticked, the exact consent text and time. In `/admin` it shows "Kontakt erlaubt" or "Kein Kontakt".
- If saving fails (bad signal), the visitor still gets in and the signup is sent again the next time they open the calendar.
- Preview with all doors open and no signup: `/adventskalender/?vorschau=1`

## Links to fill in

In `adventskalender/index.html`, the LINKS block near the top of the script: `webinar`, `klarheit`, `warteliste`.

## Own subdomain (optional)

1. Netlify > Domain management > Add a domain alias, e.g. `kalender.mindspiration.co`, and add the DNS record Netlify shows.
2. In `netlify.toml`, remove the `#` from the five lines under "Later, own subdomain".

## Email marketing in Germany

Only email people with "Kontakt erlaubt". For newsletters or bulk emails, use an email tool with double opt-in (confirmation email). Don't upload the exported list to a newsletter tool without that confirmation step. Her Datenschutz page should mention that signups are stored with Netlify.
