const MESSAGES: Record<"ban" | "warning", string> = {
  ban:
    "You've been banned from Pixl. If you think this is a mistake, reach out to a mod in #pixl-help.",
  warning:
    "This is a warning from Pixl moderation. Please review the Hack Club code of conduct (hackclub.com/conduct). Repeated issues can lead to a ban.",
};

function isAuthorized(req: Request) {
  const auth = req.headers.get("authorization");
  const expected = `Bearer ${process.env.PIXO_API_SECRET}`;
  return !!process.env.PIXO_API_SECRET && auth === expected;
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slackUserId, action } = await req.json();

  if (!slackUserId) {
    return Response.json({ error: "Missing slackUserId" }, { status: 400 });
  }
  if (action !== "ban" && action !== "warning") {
    return Response.json({ error: "Invalid action" }, { status: 400 });
  }

  const res = await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: slackUserId,
      text: MESSAGES[action as "ban" | "warning"],
    }),
  });

  const data = await res.json();
  if (!data.ok) {
    return Response.json({ error: data.error ?? "Slack API error" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
