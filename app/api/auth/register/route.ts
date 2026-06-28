// app/api/auth/register/route.ts

import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/auth/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Registration failed",
      },
      {
        status: 500,
      }
    );
  }
}