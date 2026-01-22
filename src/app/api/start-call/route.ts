import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Check if environment variables are set
    if (!process.env.retell_secret) {
      console.error("retell_secret is not set");
      return NextResponse.json(
        { error: "Retell API key not configured" },
        { status: 500 }
      );
    }

    if (!process.env.retell_agent_id) {
      console.error("retell_agent_id is not set");
      return NextResponse.json(
        { error: "Retell Agent ID not configured" },
        { status: 500 }
      );
    }

    console.log("Creating web call with agent:", process.env.retell_agent_id);

    const response = await fetch(
      "https://api.retellai.com/v2/create-web-call",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.retell_secret}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: process.env.retell_agent_id,
          metadata: {
            source: "test_drive_page",
            intent: "curious",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Retell API error:", response.status, errorData);
      return NextResponse.json(
        { 
          error: "Failed to create web call",
          details: errorData,
          status: response.status 
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Web call created successfully");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating Retell call:", error);
    return NextResponse.json(
      { error: "Failed to start call", details: String(error) },
      { status: 500 }
    );
  }
}
