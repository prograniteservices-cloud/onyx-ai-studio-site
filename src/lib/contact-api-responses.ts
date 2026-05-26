export const leadSavedEmailFailedStatus = 202;

export const leadSavedEmailFailedResponse = {
  success: true,
  partial: true,
  code: "lead_saved_email_failed",
  message:
    "Your review request was saved, but our internal notification had a delivery issue. Do not submit again; we will follow up from the saved request.",
} as const;
