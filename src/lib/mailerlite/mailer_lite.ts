"use server";

interface Result<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const sendDataToMailerLite = async (
  data: Record<string, unknown>,
  groupId: string
): Promise<Result> => {
  const { email, ...fields } = data;
  if (!process.env.MAILER_LITE_KEY) {
    console.error("MAILER_LITE_KEY environment variable is not set");
    return {
      success: false,
      message: "an error happened",
    };
  }
  try {
    const response = await fetch(
      `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILER_LITE_KEY,
        },
        body: JSON.stringify({
          email,
          fields,
        }),
      }
    );

    if (response.ok) {
      return {
        success: true,
        message: "Data submitted successfully",
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Failed to send data to MailerLite",
      };
    }
  } catch (error: unknown) {
    return {
      success: false,
      message: (error as Error).message || "An error occurred",
    };
  }
};
