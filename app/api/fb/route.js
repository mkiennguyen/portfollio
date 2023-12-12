import { NextResponse } from "next/server";

import axios from "axios";

export async function GET(req) {
  try {
    const resp = await axios.get(process.env.FACEBOOK_API_KEY, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = resp.data;
    if (resp.status == 200)
      return NextResponse.json(data, {
        status: 200,
      });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
