I never want to miss a live show from my favourite Twitch streamers, and I'm used to grouping notifications on Slack
channels as a way to organise them.
After testing services like Zapier and IFTTT and getting quite dissatisfied with the licence limitations or the lack of
customisation, I decided to write my own **cron job in Python**: it queries the **Twitch API** to find which of the
streamers I follow goes live and then connects to a Slack webhook, displaying a nice-looking message.
Never gonna miss a show again!
