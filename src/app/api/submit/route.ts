import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzR8OqYy8OvcF3Usora76UMef2UMDTUWNDJgkyT-VrOLJOyz4OtZ-513wRK9ZwpJglL/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const formData = new URLSearchParams();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, String(value || ""));
    });

    // Forward to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
      redirect: "follow",
    });

    const text = await response.text();
    console.log("Apps Script response status:", response.status, "body:", text);

    if (response.status === 403 || text.includes("ServiceLogin") || text.includes("accounts.google.com")) {
      return NextResponse.json({
        success: false,
        error: "Google Apps Script requires authorization. Please open the script in your Google account and authorize it.",
        details: text.slice(0, 300),
      });
    }

    return NextResponse.json({ success: true, googleResponse: text });
  } catch (error: unknown) {
    console.error("Submission error:", error);
    const msg = error instanceof Error ? error.message : "Failed to submit";
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 }
    );
  }
}
