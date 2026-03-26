export function validatePhone(phone, phoneConfirm) {
  if (!phone) return { valid: false, message: "연락처를 입력해주세요." };
  if (!phoneConfirm) return { valid: false, message: "연락처 확인을 입력해주세요." };
  if (phone !== phoneConfirm) return { valid: false, message: "연락처가 일치하지 않습니다." };
  return { valid: true };
}

export async function submitToGoogleSheet(formData) {
  const phoneCheck = validatePhone(formData.phone, formData.phoneConfirm);
  if (!phoneCheck.valid) return { success: false, error: phoneCheck.message };

  const { phoneConfirm, ...submitData } = formData;

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    });
    const result = await response.json();
    return { success: result.result === "success" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
